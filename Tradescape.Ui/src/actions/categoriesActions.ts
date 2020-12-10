import { CATEGORY_ADD, CATEGORY_REMOVE, UPDATE_CATEGORIES, CHOSEN_CATEGORIES } from './constants/categoriesConstants'

export const addCategory = ({ id, name }: any) => ({
    type: CATEGORY_ADD,
    payload: {
        id,
        name,
    }
  })

export const removeCategory = ({ id, name }: any) => ({
    type: CATEGORY_REMOVE,
    payload: {
        id,
        name,
    }
})

// prawdopodobnie podpiołeś się pod istniejącego reducera, nie możesz za każdym razem gdy zostanie wybrana kategoria updetować całego strora,
// trzeba stworzyć nowego stora dla wybranych kategorii

export const updateCategories = (categories: object) => ({
    type: UPDATE_CATEGORIES,
    payload: {
        categories
    }
})
export const chosenCategories = (chosenCategories: object) => ({
    type: CHOSEN_CATEGORIES,
    payload: {
        chosenCategories
    }
})

