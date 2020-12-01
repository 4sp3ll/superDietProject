// import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'


// const store = createStore(reducer, applyMiddleware(thunk))



const ReducerChosenCategoryId = () => {

}



// //TYPES
// import { LOGIN } from './../types';

// //REDUX-THUNK actions

// export const thunkFunction = () => {

//     return (dispatch) => {
//         fetch(`http://localhost:3001/api/categories/${this.state.chosenCategoryId}`, {
//             method: "GET",
//             headers: {}
//         })
//             .then(results => {
//                 return results.json();)
//             .then(resp => {

//                 let categories = data.categories.items.map((item: { id: any; name: string; leaf: boolean; }) => {
//                     return (
//                         <div key={item.id}>
//                             <ButtonCategory
//                                 id={item.id}
//                                 name={item.name}
//                                 leaf={item.leaf}
//                                 setChanged={this.setChanged}
//                                 pathArray={this.state.pathArray}
//                             >
//                             </ButtonCategory>

//                 dispatch({
//                     type: LOGIN,
//                     payload: {
//                         username: resp.username,
//                         email: resp.email,
//                         userId: resp.id
//                     }
//                 })
//             })
//             .catch((error) => console.error(error))
//     }
// }