class addData {
  constructor(base) {
    this.base = base;
  }
  async post(value) {
    const obj = {
      entry: value,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    };
    await fetch(this.base, options);
  }
}
export default addData;
