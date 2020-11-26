import { categoryReducer, filterReducer, keyWords, isSuperseller, netGrossCalc, rememberCalc } from '../components/categories/smart/CategoryReducer'
import { apiAnswer } from '../components/categories/smart/CategoriesAsync'
import { offerDetailsReducer } from '../components/offerDetails/OfferDetailsReducer'
import { apiAnswerOfferId } from '../components/offerDetails/OfferDataFetch'
// import asyncReducer from '../components/categories/smart/CategoriesAsync'


// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    categoriesStore: categoryReducer,
    categoriesAsync: apiAnswer,
    filtersStore: filterReducer,
    keyWords,
    isSuperseller,
    netGrossCalc,
    rememberCalc,
    apiAnswer,
    offerDetailsReducer,
    apiAnswerOfferId
}
