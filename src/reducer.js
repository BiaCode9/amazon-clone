export const initialState = {
  basket: [],
  user: null
};

// global store for the applicaiton
// pattern for dispatching actions into the store

// Selector
// good practice to have the Selector in the reducer
//reduce is a very important function
//reduce iterates through the basket and tallys up the total of all of the item prices
//fancy way of having a for loop and incrementing through it and tallying it up and retur it
// ? 

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// action is tryign to remove or add .. so it takes a switch
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        // whatever the basket currently is plus whatever is decided to be added
        basket: [...state.basket, action.item],
      };
    
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //copy of the current basket contents
      let newBasket = [...state.basket];

      if (index >= 0) {
        //cutting it only by 1 inside the array
        //user friendly code for this kind of build

        newBasket.splice(index, 1);

      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        )
      }

      return {
        ...state,
        basket: newBasket
      }
    
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
};

export default reducer;
