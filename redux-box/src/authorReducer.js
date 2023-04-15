
export default function authorReducer(state = [], action){
    switch(action.type){
      case "authors/addNewAuthor":
        return { 
          ...state,
          products: [...state.products, action.payload]
        }
      case "authors/fetchfromserver":
        return action.payload

      default: 
        return state
    }
  }
