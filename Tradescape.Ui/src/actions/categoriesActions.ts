const CATEGORY_ADD = 'CATEGORY_ADD'
const CATEGORY_REMOVE = 'CATEGORY_REMOVE'


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