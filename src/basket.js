/* eslint-disable prettier/prettier */
// SOURCE CODE
class Basket {
  constructor() {
    // This basket is an array
    this.basket = []
    this.max = 3
  }

  basketMaximum() {
    if (this.basket.length >= this.max) {
      return true
    }
    return false
  }

  // OOP this is a Class Method aka a Function inside a class
  addToBasket(item) {
    if (!this.basketMaximum()) {
      // only push an item to the basket if there IS an item to push
      if (item) this.basket.push(item)
    }
    // push the item here back to this basket at the top
    return this.basket
  }

  addMultipleToBasket(items) {
    for (let i = 0; i < items.length; i++) {
      this.addToBasket(items[i])
    }
    return this.basket
  }

  removeFromBasket(item) {
    // newBasket is a temporary const, that then becomes this.basket at the end of the method
    const newBasket = []
    // loop through the basket array, only push items to newBasket if they are NOT in the itemToRemove list (passed into item above)
    for (let i = 0; i < this.basket.length; i++) {
      if (item.variant !== this.basket[i].variant) {
        newBasket.push(this.basket[i])
      }
    }
    this.basket = newBasket
    return this.basket
  }

  increaseBasketMax(increaseMaxBy) {
    this.max = this.max + increaseMaxBy // takes the current max (3) and adds the new max passed from the spec file (2)

    return this.max
  }

  itemNotInBasket(item) {
    const newBasket = []
    for (let i = 0; i < this.basket.length; i++) {
      if (item.variant !== this.basket[i].variant) {
        return 'This item is not in your basket!';
      }
    }
    this.basket = newBasket
    return this.basket
  }
}

module.exports = Basket
