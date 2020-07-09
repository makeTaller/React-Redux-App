export const ADD_LESSON = "ADD_LESSON";
export const REMOVE_LESSON = "REMOVE_LESSON";
export const UPDATE_LESSON = "UPDATE_LESSON";


export const add_lesson = ( lesson ) => {
    return { type: ADD_LESSON, payload: lesson }
}

export const remove_lesson = ( lesson ) => {
    return { type: REMOVE_LESSON, payload: lesson }
}

export const update_lesson = ( lesson ) => {
    return { type: UPDATE_LESSON, payload: lesson }
}
