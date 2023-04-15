// import {connect} from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { addNewProduct, fetchProduct} from './productsSlice';
import { addNewAuthor, fetchAuthors } from './authorSlice';

// import * as actions from './actionCreators';
// import { bindActionCreators } from 'redux';

// const Counter = ({products, authors, fetchInitialData, fetchInitialAuthorData, addAuthor, add}) => {
//     console.log(products)
//     console.log(authors)
//     return ( <div>
//         <div  style={{display:"flex"}}>
//             <div>{products.map(item => <div key={item.id}> {item.title} </div>)}</div>
//             <div>{authors.map(item => <div key={item.id}> {item.lastName} .{item.firstName.slice(0,1)} --- {item.address.address}</div>)}</div>
        
//         </div>
        
//          <button id="inc" onClick={fetchInitialData} className="btn btn-primary btn-lg">fetchInitialData</button>
//       <button id="dec" onClick={add} className="btn btn-primary btn-lg">ADD</button>
//          <button id="inc" onClick={fetchInitialAuthorData} className="btn btn-primary btn-lg">fetchInitialAuthorData</button>
//       <button id="dec" onClick={addAuthor} className="btn btn-primary btn-lg">addAuthor</button>
//     </div> );
// }
 
// const mapStateToProps = (state) => ({
//     products: state.products,
//     authors: state.authors
// })
// // const mapDispatchToProps = (dispatch) => {
// //     const {inc, dec, rnd} = bindActionCreators(actions,dispatch)
// //     return {
// //         inc,
// //         dec,
// //         rnd
// //     }
   
// // }
// export default connect(mapStateToProps,actions)(Counter);

const Counter = () => {
    const {products} = useSelector(state => state)
    const {authors} = useSelector(state => state)
    const dispatch = useDispatch()

    return ( <div>
        <div  style={{display:"flex"}}>
            <div>{products.map(item => <div key={item.id}> {item.title} </div>)}</div>
            <div>{authors.map(item => <div key={item.id}> {item.lastName} .{item.firstName.slice(0,1)} --- {item.address.address}</div>)}</div>
        
        </div>
        <button id="inc" onClick={() => dispatch(fetchProduct())} className="btn btn-primary btn-lg">fetchInitialData</button>
        <button id="dec" onClick={() => dispatch(addNewAuthor({
        id: 13332,
        firstName: 'abu usama',
        lastName: 'atamimi',
        address: {address: 'qasim'}
    }))} className="btn btn-primary btn-lg">addAuthor</button>
        <button id="dec" onClick={() => dispatch(addNewProduct({id:"new12334", title:'new product'}))} className="btn btn-primary btn-lg">ADD</button>
        <button id="inc" onClick={() => dispatch(fetchAuthors())} className="btn btn-primary btn-lg">fetchInitialAuthorData</button>
    </div> );
}
 

// const mapDispatchToProps = (dispatch) => {
//     const {inc, dec, rnd} = bindActionCreators(actions,dispatch)
//     return {
//         inc,
//         dec,
//         rnd
//     }
   
// }
export default Counter;