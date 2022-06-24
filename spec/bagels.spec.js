// TEST CODE
const Basket = require('../src/basket.js')

describe('Basket', () => {
  /* Part 1-1 DONE
  As a member of the public
  So I can order a bagel when I want to
  I'd like to add an item to my basket */

  it('Customer - adds an item to the basket', () => {
    // Add item is an Array due to the [], the {} inside are Objects
    const basket = new Basket()
    const itemToAdd = [
      {
        name: 'Bagel',
        price: 7.99,
        variant: 'Vegi Supreme',
        quantity: 1
      },

      {
        name: 'Bagel',
        price: 8.99,
        variant: 'NYC Deli',
        quantity: 2
      },

      {
        name: 'Bagel',
        price: 11.99,
        variant: 'All Day Breakfast',
        quantity: 5
      }
    ]

    const expectedResult = [itemToAdd]
    const updatedBasket = basket.addToBasket(itemToAdd)
    expect(updatedBasket).toEqual(expectedResult)
  })

  it("Customer - doesn't add item if there is no item", () => {
    const basket = new Basket()
    const expectedResult = []
    // execute
    const updatedBasket = basket.addToBasket()
    // verify
    expect(updatedBasket).toEqual(expectedResult)
  })

  /* Part 1-2 DONE
  As a member of the public,
  So that I can change my order
  I'd like to remove an item from my basket */
  it('Customer - remove an item from the basket', () => {
    const basket = new Basket()

    const itemsToAdd = [
      {
        name: 'Bagel',
        price: 7.99,
        variant: 'Vegi Supreme',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 8.99,
        variant: 'NYC Deli',
        quantity: 1
      }
    ]

    const itemToRemove = {
      name: 'Bagel',
      price: 7.99,
      variant: 'Vegi Supreme',
      quantity: 1
    }

    const expectedResult = [
      {
        name: 'Bagel',
        price: 8.99,
        variant: 'NYC Deli',
        quantity: 1
      }
    ]

    // execute
    basket.addMultipleToBasket(itemsToAdd)
    const updatedBasket = basket.removeFromBasket(itemToRemove)
    // console.log('new basket', updatedBasket)

    // verify
    expect(updatedBasket).toEqual(expectedResult)
  })

  /* Part 2-1 DONE
  As a member of the public,
  So that I can not overfill my small bagel basket
  I'd like to know when my basket is full when I try adding an item beyond my basket capacity. */
  it('Customer - your basket is full', () => {
    const basket = new Basket()

    const itemsToAdd = [
      {
        name: 'Bagel',
        price: 7.99,
        variant: 'Vegi Supreme',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 8.99,
        variant: 'NYC Deli',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 9.99,
        variant: 'Oxford Blue',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 15.99,
        variant: 'Everytopping Everywhere All At Once',
        quantity: 1
      }
    ]

    const expectedResult = [
      {
        name: 'Bagel',
        price: 7.99,
        variant: 'Vegi Supreme',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 8.99,
        variant: 'NYC Deli',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 9.99,
        variant: 'Oxford Blue',
        quantity: 1
      }
    ]

    // execute
    const updatedBasket = basket.addMultipleToBasket(itemsToAdd)
    // console.log("updated basket=", updatedBasket);

    // verify
    expect(updatedBasket).toEqual(expectedResult)
  })

  /* Part 2-2 DONE
  As a Bob's Bagels manager,
  So that I can record more sales
  I’d like to create baskets with larger capacity when I need to. */
  it('Manager - increase basket capacity', () => {
    const basket = new Basket()
    const expectedResult = 5
    // execute
    const updatedBasket = basket.increaseBasketMax(2) // Passes (2) into the function in basket.js
    // verify
    expect(updatedBasket).toEqual(expectedResult)
  })

  /* Part 2-3 DONE
  As a member of the public
  So that I can maintain my sanity
  I'd like to know if I try to remove an item that doesn't exist in my basket. */
  it('Customer - Item is not in my basket', () => {
    const basket = new Basket()

    const itemsToAdd = [
      {
        name: 'Bagel',
        price: 7.99,
        variant: 'Vegi Supreme',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 8.99,
        variant: 'NYC Deli',
        quantity: 1
      }
    ]

    const itemToRemove = {
      name: 'Bagel',
      price: 9.99,
      variant: 'Oxford Blue',
      quantity: 1
    }

    const expectedResult = 'This item is not in your basket!'

    // execute
    basket.addMultipleToBasket(itemsToAdd)
    const updatedBasket = basket.itemNotInBasket(itemToRemove)

    // verify
    expect(updatedBasket).toEqual(expectedResult)
  })

  /* Part 3-1 DONE
  As a member of the public,
  So that I can know how much my bagels are,
  I’d like to see the price of each item before I add it to my basket. */
  it('Customer - check item price before adding it to my basket', () => {
    const basket = new Basket()
    const itemToAdd = {
      name: 'Bagel',
      price: 7.99,
      variant: 'Vegi Supreme'
    }

    const expectedResult = [7.99]
    const updatedBasket = basket.priceChecker(itemToAdd.price)
    expect(updatedBasket).toEqual(expectedResult)
  })

  /*
Part 3-2
As a member of the public
So that I can buy many of my favorite bagel
I'd like to be able to add the same type of bagel to my basket more than once */

  it('Customer - allow me to add multiple of my favorite bagel', () => {
    const basket = new Basket()

    const itemsToAdd = [
      {
        name: 'Bagel',
        price: 7.99,
        variant: 'Vegi Supreme',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 7.99,
        variant: 'Vegi Supreme',
        quantity: 1
      }
    ]

    const expectedResult = [
      {
        name: 'Bagel',
        price: 7.99,
        variant: 'Vegi Supreme',
        quantity: 2
      }
    ]

    // execute
    const updatedBasket = basket.addMultipleToBasket(itemsToAdd)
    // console.log("updated basket=", updatedBasket);

    // verify
    expect(updatedBasket).toEqual(expectedResult)
  })

  /*
Part 3-3
As a member of the public,
So that I can prepare to pay
When I go to checkout I'd like to know the total sum of the bagels in my basket */

  it('Customer - get total sum of goods', () => {
    const basket = new Basket()

    basket.addMultipleToBasket([
      {
        name: 'Bagel',
        price: 7.99,
        variant: 'Vegi Supreme',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 8.99,
        variant: 'NYC Deli',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 15.99,
        variant: 'Everytopping Everywhere All At Once',
        quantity: 1
      }
    ])

    const expectedResult = 32.97

    // execute
    const updatedBasket = basket.totalPrice()
    // console.log("updated basket=", updatedBasket);

    // verify
    expect(updatedBasket).toEqual(expectedResult)
  })
})
