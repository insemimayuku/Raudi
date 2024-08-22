const db = require('../database/database')

exports.Register = async (req, res) => {
    try {
        const {email, password } = req.body;
        conn = await db.pool.getConnection();

        const result = await conn.query('Select * From user Where email = ?', [email]);
        conn.release();
        if (result.length > 0) {
            return res.status(202).json({ error: 'Désolé, mais cet utilisateur existe déjà.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const insertUserQuery = 'INSERT INTO user (email, password) VALUES (?, ?)';
        const insertUserValues = [email, hashedPassword];
        conn.release();

        const token = jwt.sign({ email }, process.env.API_KEY, { expiresIn: '1h' });

        res.json({ token });
    } catch(error) {
        console.error(error);
        res.status(203).json({ error: 'Une erreur s\'est produite lors de votre inscription.'});
    }
}