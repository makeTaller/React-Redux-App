import React, { useReducer } from "react";
import { Lesson } from "../Components/Lesson"
import {initialState,lessonReducer} from "../Reducers/"

export const LessonList  = (props) =>{
    const [state, dispatch] = useReducer(lessonReducer, initialState);
    return(

        <div>
            <h2>Lesson List</h2>
            {state.lessons.map(lesson=>
                <Lesson key={lesson.id} lesson={lesson}/>)}
        </div>
    )

}
