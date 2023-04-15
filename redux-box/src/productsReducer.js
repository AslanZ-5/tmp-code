export default function productsReducer(state = [], action){
    switch(action.type){
      case "products/addNewProduct":
        return { 
          ...state,
          products: [...state.products, action.payload]
        }
      case "products/fetchfromserver":
        return action.payload

      default: 
        return state
    }
  }
