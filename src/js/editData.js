class EditData {
  constructor(base) {
    this.base = base;
  }
  async patch(id, value) {
    const obj = {
      entry: value,
    };
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    };
    await fetch(this.base + '/' + id, options);
  }
}
export default EditData;
