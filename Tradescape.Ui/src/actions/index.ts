import {
    addCategory,
    removeCategory,
    updateCategories,
    chosenCategories
} from './categoriesActions'
import {
    minCarbo,
    minProtein,
    minFat,
    minSalt,
    maxSalt,
    minRoughage,
    maxRoughage,
    containWords
} from './filtersActions'

const allActions = {
    addCategory,
    removeCategory,
    updateCategories,
    minCarbo,
    minProtein,
    minFat,
    minSalt,
    maxSalt,
    minRoughage,
    maxRoughage,
    containWords,
    chosenCategories
}

export default allActions