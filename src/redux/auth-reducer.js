const SET_IS_FETCH = 'SET_IS_FETCH'

let initialState = {
    isFetch: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCH:
            return {
                ...state,
                isFetch: action.isFetch
            }
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetch) => ({type: SET_IS_FETCH, isFetch})

export const getUnionProjects = (request_type) => { //Получение информации о проекте
    return async (dispatch) => {

    }
}

export default authReducer
