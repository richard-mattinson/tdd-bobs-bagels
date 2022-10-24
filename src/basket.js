/* eslint-disable prettier/prettier */

// SOURCE CODE
class Basket {
  constructor() {
    // This basket is an array
    this.items = []
    this.max = 3
  }

  // OOP this is a Class Method aka a Function inside a class
  addToBasket(item) {
    if (this.items.length < this.max) {
      // only push an item to the basket if there IS an item to push
      const matchingItemIndex = this.items.findIndex((basketItem) => {
        return (
          basketItem.name === item.name && basketItem.variant === item.variant
        )
      })
      if (matchingItemIndex >= 0) {
        this.items[matchingItemIndex].quantity++
      } else {
        this.items.push(item)
      }
    }
  }

  addMultipleToBasket(items) {
    for (let i = 0; i < items.length; i++) {
      this.addToBasket(items[i])
    }
    return this.items
  }

  //   itemAlreadyInBasket(item) {
  //     for (let i = 0; i < this.basket.length; i++) {
  //       if (item.variant === this.basket[i].variant) {
  //       return true
  //     }
  //   }
  //     return false
  // }

  // if item ISN'T already in the basket, add item
  // if item IS already in the basket, update quantity only

  removeFromBasket(item) {
    // newBasket is a temporary const, that then becomes this.basket at the end of the method
    const newBasket = []
    // loop through the basket array, only push items to newBasket if they are NOT in the itemToRemove list (passed into item above)
    for (let i = 0; i < this.items.length; i++) {
      if (item.variant !== this.items[i].variant) {
        newBasket.push(this.items[i])
      }
    }
    this.items = newBasket
    return this.items
  }

  getPrice(item) {
    return item.price
  }

  increaseBasketMax(increaseMaxBy) {
    this.max = this.max + increaseMaxBy // takes the current max (3) and adds the new max passed from the spec file (2)
    return this.max
  }

  itemNotInBasket(item) {
    const newBasket = []
    for (let i = 0; i < this.items.length; i++) {
      if (item.variant !== this.items[i].variant) {
        return 'This item is not in your basket!'
      }
    }
    this.items = newBasket
    return this.items
  }

  getTotal() {
    let totalPrice = 0
    for (let i = 0; i < this.items.length; i++) {
      for (let j = 0; j < this.items[i].quantity; j++) {
        totalPrice += this.items[i].price
      }
    }
    return totalPrice
  }
}

module.exports = Basket
