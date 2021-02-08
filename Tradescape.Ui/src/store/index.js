import { filterReducer, keyWords, isSuperseller, netGrossCalc, rememberCalc } from '../pages/SearchEngine/containers/CategoryReducer'
import { categoriesSearchEngineReducer } from '../reducers/categoriesSearchEngineReducer'
import { apiSearchEngine } from '../reducers/apiSearchEngineReducer'
import { keepedProductReducer } from '../reducers/keepProductReducer'
import { offerDetailsReducer } from '../pages/ProductDetails/containers/OfferDetailsReducer'
import { filtersSearchEngineReducer } from '../reducers/filtersSearchEngineReducer'
import { yourProportions } from '../reducers/yourProportionsReducer'
import authReducer from '../reducers/authReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { productToStore } from '../reducers/productsToStore'

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    categoriesSearchEngine: categoriesSearchEngineReducer,
    apiSearchEngineReducer: apiSearchEngine,
    filtersSearchEngine: filtersSearchEngineReducer,
    isSuperseller,
    netGrossCalc,
    rememberCalc,
    offerDetailsReducer,
    yourProportions,
    auth: authReducer,
    firebase: firebaseReducer,
    keepedProducts: keepedProductReducer,
    productToStore
}
