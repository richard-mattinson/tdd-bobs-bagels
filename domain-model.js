/*
NOUNS -> properties/data
VERBS/ACTIONS -> methods/functions

class CLASS_NAME
- PROPERTIES
  - propertyName: datattype

- METHODS
  - functionName(parameter1: datatype, parameter2: datatype) -> returns RETURN_VALUE: datatype


FOR EACH method, pick a name, decide what data is needed for the function to work: a) is any of that data in the class properties, or are you expecting who calls the function to give you some data (ie. via parameters); what is the data type of each parameter; what should the function give back? a value, an array, an object, etc...


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
Add an item to the basket  
  - addItem(item: BagelItem JS Object) -> 
  - returns updated array of items with the new bagel

Remove an item from the basket
  - removeItem (Bagel, object with array)
  - returns the updated array of items, minus the last bagel on the array
  */
