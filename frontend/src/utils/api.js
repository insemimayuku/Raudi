class api {
  constructor() {
    this.api = process.env.REACT_APP_API_URL;
  }
  async getallvehicles() {
    try {
      const response = await fetch(`${this.api}/vehicule/all`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async getvehicle(id) {
    try {
      const response = await fetch(`${this.api}/vehicule/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async login({ email, password }) {
    try {
      const response = await fetch(`${this.api}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default api;
