exports.Login = async (req, res) => {
    try {
        const {email, password } = req.body;
        conn = await db.pool.getConnection();

        const result = await conn.query('Select * From user Where email = ?', [email]);
        conn.release();
        if (result.length === 0) {
            return res.status(204).json({ error: 'Désolé, nous ne trouvons pas cet utilisateur.' });
        }

        const user = result[0];
        
        const passwordMatch = await bcrypt.compare(password, user, password);

        if(!passwordMatch) {
            return res.status(204).json({ error: 'Votre mot de passe est incorrect.'});
        }

        const token = jwt.sign({ email: user.email }, process.env.API_KEY, { expiresIn: '1h' });
        res.json({ token });
    } catch(error) {
        console.error(error);
        res.status(205).json({ error: 'Une erreur s\'est produite lors de la connexion.'});
    }
}