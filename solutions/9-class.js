import _ from 'lodash';

// BEGIN
class Item {
    constructor([{name, price}, count]) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    represent() {
        return {item: {name: this.name, price: this.price}, count: this.count}
    }

    cost() {
        return this.price * this.count;
    }
}


class Cart {

    constructor() {
        this.items = [];
    }

    addItem(...args) {
        this.items.push(new Item(args));
    }

    getCost() {
        return this.items.reduce((acc, item) => acc + item.cost(), 0);
    }

    getCount() {
        return this.items.reduce((acc, item) => acc + item.count, 0);
    }

    getItems() {
        return this.items.map((item) => item.represent());
    }

}

export default Cart;
// END
