/*
NOUNS -> properties/data
VERBS/ACTIONS -> methods/functions

class CLASS_NAME
- PROPERTIES
  - propertyName: datattype

- METHODS
  - functionName(parameter1: datatype, parameter2: datatype) -> returns RETURN_VALUE: datatype


FOR EACH method, pick a name, decide what data is needed for the function to work: 
- is any of that data in the class properties, or are you expecting whomever calls the function to give you some data (ie. via parameters); 
- What is the data type of each parameter; what should the function give back? a value, an array, an object, etc...


JS Object BagelItem
- PROPERTIES
  - name: string
  - price: number
  - variant: string
  - quantity: number

class Basket
- PROPERTIES (what data I need to store)
  - items (name of the property): array of Bagel Items (datatype) 

- METHODS (actions/functions)
1-1 Add an item to the basket  
  - addItem(item: BagelItem JS Object) -> 
  - returns updated array of items with the new bagel

1-2 Remove an item from the basket
  - removeItem (Bagel, object with array)
  - returns the updated array of items, minus the last bagel on the array

2-1 Stop an item from being added when basket is full
  - basketMax Value to check basket against
  - when customer tries to add item
    - if basket isn't full, addItem
    - if basket is full, return error

2-2 Increase basket size
  - Call basketMax
  - Increase basket size by value given

2-3 Stop an item from being removed if it isn't in the basket
  - check basket array for item
    - if item is in basket, return true
    - if the item is not in the basket, return false
*/
