// SOURCE CODE
class Basket {
    constructor () {
        // This basket is an array
        this.basket = []
    }

    // OOP this is a Class Method aka a Function outside of a class
    addToBasket(item) {
        // if item is null, then return null
        if(!item) {
            return null
        } else {
        // push the item here back to this basket at the top   
            this.basket.push(item)
            return this.basket
            
        }
    }


    removeFromBasket(item) {
        // check if there any items basket, then remove the last one from the array
        if(this.basket.length > 0) {
        // pop the item out of the basket at the top   
        this.basket.pop(item)
        return this.basket
        }
    }

}
// console.log("Basket Contents" + this.basket)



module.exports = Basket