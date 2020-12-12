import { filterReducer, keyWords, isSuperseller, netGrossCalc, rememberCalc } from '../pages/SearchEngine/containers/CategoryReducer'
import { categoriesSearchEngineReducer } from '../reducers/categoriesSearchEngineReducer'
import { apiSearchEngineReducer } from '../reducers/apiSearchEngineReducer'
import { offerDetailsReducer } from '../pages/ProductDetails/containers/OfferDetailsReducer'
import { apiAnswerOfferId } from '../pages/ProductDetails/containers/OfferDataFetch'
import { filtersSearchEngineReducer } from '../reducers/filtersSearchEngineReducer'
// import asyncReducer from '../components/categories/smart/CategoriesAsync'


// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    // categoriesStore: categoryReducer,
    categoriesSearchEngine: categoriesSearchEngineReducer,
    apiSearchEngineReducer,
    // filtersStore: filterReducer,
    filtersSearchEngine: filtersSearchEngineReducer,
    isSuperseller,
    netGrossCalc,
    rememberCalc,
    // apiAnswer,
    offerDetailsReducer,
    apiAnswerOfferId
}
