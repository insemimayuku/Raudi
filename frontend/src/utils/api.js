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
}

export default api;
