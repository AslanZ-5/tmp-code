class SwapiService {
  _baseUrl = "https://swapi.dev/api/";
  async getResource(url = "people/") {
    const res = await fetch(`${this._baseUrl}${url}`);
    if (!res.ok) {
      throw new Error("Faild to fetch data!!!!!!!!!");
    }
    return res.json();
  }
  getAllPeople() {
    return this.getResource();
  }
  getPerson(id) {
    return this.getResource(`people/${id}/`);
  }
  getAllPlanets() {
    return this.getResource("planets/");
  }
  getPlanet(id) {
    return this.getResource(`planets/${id}/`);
  }
  getAllStarships() {
    return this.getResource("starships/");
  }
  getStarship(id) {
    return this.getResource(`starships/${id}/`);
  }
}
export default SwapiService;
