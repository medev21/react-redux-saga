const payload_add = {
    id: 5,
    description: "hello from redux",
    value: 100,
    isExpense: false,
  }

  const payload_remove = {
    id: 1
  }

export const addEntryRedux = (payload) => {
    return {type: 'ADD_ENTRY', payload}
  }

export const removeEntryRedux = (id) => {
    return {type: 'REMOVE_ENTRY', payload: {id}}
}