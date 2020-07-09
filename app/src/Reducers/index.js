import {ADD_LESSON, REMOVE_LESSON, UPDATE_LESSON} from "../Actions"

export const initialState = {
    lessons: [],
    error: '',
    isFetching: false
}

export const lessonReducer = (state =initialState, action) => {

    switch (action.type){

        case ADD_LESSON:
            return {...state, lesson:action.payload}

        case REMOVE_LESSON:
            return {...state, lesson: state.lesson.filter(l => l !== action.payload)}
        default:
            return state
    }

}
