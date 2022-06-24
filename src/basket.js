/* eslint-disable prettier/prettier */

// SOURCE CODE
class Basket {
  constructor() {
    // This basket is an array
    this.basket = []
    this.max = 3
    this.price = []
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

  itemAlreadyInBasket(item) {
    for (let i = 0; i < this.basket.length; i++) {
      if (item.variant === this.basket[i].variant) {
      return true
    }
  }
    return false
}

  // if item ISN'T already in the basket, add item
  // if item IS already in the basket, update quantity only
  addFavoriteToBasket(item) {
    const newBasket = []
    for (let i = 0; i < this.basket.length; i++) {
      if (this.itemAlreadyInBasket() === true) {
        newBasket.push(item.quantity += this.basket[i].quantity)
      } else {
          newBasket.push(this.basket[i])
      }
    }
    this.basket = newBasket
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
        return 'This item is not in your basket!'
      }
    }
    this.basket = newBasket
    return this.basket
  }

  priceChecker(item) {
    this.price.push(item)
    return this.price
  }

  totalPrice() {
    let totalPrice = 0
    for (let index = 0; index < this.basket.length; index++) {
      totalPrice += this.basket[index].price
    }
    return totalPrice
  }
}

module.exports = Basket
