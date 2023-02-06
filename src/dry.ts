type Size = '' | 'S' | 'M' | 'L' | 'XL';
class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = ''
  ) {}

  isProductNotEmpty(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((this[key] as string).length <= 0)
            throw new Error(`${key} is required`);
          break;
        case 'number':
          if ((this[key] as number) <= 0) throw new Error(`${key} is required`);
          break;
        default:
          throw new Error(`${typeof this[key]} is not valid`);
      }
    }
    return true;
  }

  toString() {
    //apply dry  principle
    if (!this.isProductNotEmpty) return;
    return `${this.name} - ${this.price} - ${this.size}`;
  }
}

(() => {
  const bluePants = new Product('Blue', 100, 'XL');
  console.log(bluePants.toString());
})();
