export default function reducer(state={
    fetching: false,
    list: []
}, action) {
    switch (action.type) {
        case "FETCH_LIST": {
            return {...state, fetching: true}
        }
        case "ADD_TASK": {
            return {...state, list: [...state.list, action.payload]}
        }
    }
    return state
}
