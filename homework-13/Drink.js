class Drink {
  #temperature;

  constructor(name, size, price, temperature) {

    if (new.target === Drink) {
      throw new Error('Drink нельзя создавать напрямую')
    };

    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfoDrink() {
    return {
      name:this.name,
      size:this.size,
      price:this.price,
      temperature:this.#temperature,
    };
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(value) {
    this.#temperature = value;
  }

  #prepare() {
    console.log('Напиток готовится');
  }

  serveDrink() {
    this.#prepare();
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType, milkType) {
    super(name, size, price, temperature);
    this.beanType = beanType;
    this.milkType = milkType;
  }

  serveDrink() {
    super.serveDrink();
    this.setTemperature(85);
  }
}

const coffee = new Coffee('Американо', 200, 100, 90, 'Арабика', 'Коровье');

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType, sugar) {
    super(name, size, price, temperature);
    this.teaType = teaType;
    this.sugar = sugar;
  }

  serveDrink() {
    super.serveDrink();
    this.setTemperature(56);
  }
}

const tea = new Tea('Lipton', 100, 50, 60, 'black', true);

class Lemonade extends Drink {
  constructor(name, size, price, temperature, sparkling, withIce) {
    super(name, size, price, temperature);
    this.sparkling = sparkling;
    this.withIce = withIce;
  }

  serveDrink() {
    super.serveDrink();
    this.setTemperature(5);
  }
}

const lemonade = new Lemonade('Sprite', 300, 150, 13, true, true);

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfoCafe() {
    return {
      name: this.name,
      location: this.location
    };
  }

  orderDrink(drink){
    drink.serveDrink();
  }
}

const cafe = new Cafe('Coffee Plus', 'Казань');

console.log(cafe.getInfoCafe());

cafe.orderDrink(coffee);
console.log(coffee.getInfoDrink());

cafe.orderDrink(lemonade);
console.log(lemonade.getInfoDrink());

cafe.orderDrink(tea);
console.log(tea.getInfoDrink());