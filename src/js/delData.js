class DelData {
  constructor(base) {
    this.base = base;
  }
  async del(id) {
    const options = {
      method: 'DELETE',
    };
    await fetch(this.base + '/' + id, options);
  }
}
export default DelData;
