export const fetchInitialData = () => (dispatch,state,arg) => {
    fetch('https://dummyjson.com/products').then(data => data.json()).then(data => {
      console.log("!!!!!!!!!!", arg)
      dispatch({type:"products/fetchfromserver",payload:data.products})
    })
}
export const add = () =>({type:  "products/addNewProduct", payload: {id:'asad33134', title:'this is the test name'}})
export const fetchInitialAuthorData = () => (dispatch,state,arg) => {
    fetch('https://dummyjson.com/users').then(data => data.json()).then(data => {
      console.log("!!!!!!!!!!", arg)
      dispatch({type:"authors/fetchfromserver",payload:data.users})
    })
}
export const addAuthor = () =>({type:  "authors/addNewAuthor", payload: {id:'asad330000134', name:'asad'}})

