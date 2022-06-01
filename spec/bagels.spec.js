/* ## User Stories

```
Part 1-1
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

Part 1-2
As a member of the public,
So that I can change my order
I'd like to remove an item from my basket */

// TEST CODE
const Basket = require('../src/basket.js')

describe('Basket', () => {
  it('adds an item in the basket', () => {
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

  it("doesn't add item if null", () => {
    const basket = new Basket()
    const expectedResult = null
    // execute
    const updatedBasket = basket.addToBasket()
    // verify
    expect(updatedBasket).toEqual(expectedResult)
  })

  it('remove an item from the basket', () => {
    const basket = new Basket()
    const itemToAdd = [
      ({
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
      })
    ]
    const expectedResult = []
    // execute
    const updatedBasket = basket.removeFromBasket()
    // verify
    expect(updatedBasket).toEqual(expectedResult)
  })
})

// it("Adult can leave when adults 2 and children 1", function() {
//   let softPlay = new SoftPlay()
//   softPlay.enter(2,1)
//   expect(softPlay.leave(1,0)).toBeTrue()
//   expect(softPlay.occupancy()).toEqual({adults: 1, children: 1})
// })
