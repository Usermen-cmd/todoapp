class FetchData {
  constructor(BASE_URL) {
    this.BASE_URL = BASE_URL;
  }
  async fetch() {
    const promis = await fetch(this.BASE_URL);
    const data = await promis.json();
    return data;
  }
}
export default FetchData;
