import { CATEGORY_ADD, CATEGORY_REMOVE } from './constants/categoriesConstants'

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

