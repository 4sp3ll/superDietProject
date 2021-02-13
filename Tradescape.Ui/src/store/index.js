import { categoriesSearchEngineReducer } from '../reducers/categoriesSearchEngineReducer'
import { apiSearchEngine } from '../reducers/apiSearchEngineReducer'
import { keepedProductReducer } from '../reducers/keepProductReducer'
import { filtersSearchEngineReducer } from '../reducers/filtersSearchEngineReducer'
import { yourProportions } from '../reducers/yourProportionsReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { productToStore } from '../reducers/productsToStore'

export const reducers = {
    categoriesSearchEngine: categoriesSearchEngineReducer,
    apiSearchEngineReducer: apiSearchEngine,
    filtersSearchEngine: filtersSearchEngineReducer,
    firebase: firebaseReducer,
    keepedProducts: keepedProductReducer,
    yourProportions,
    productToStore
}
