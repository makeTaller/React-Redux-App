import React, {useState} from "react";

export const Lesson_form = (props) =>{
    
    const [newlesson, setLesson ] = useState(" ");

    const handleChanges = (e) => {
        console.log(newlesson)
           setLesson(...newlesson, {[e.target.name]: e.target.value}) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        setLesson(...newlesson, newlesson)
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1> Lesson Form</h1>
                </div>
                <div>
                    <label>
                        Enter a Lesson:
                        <input
                            type="text"
                            value={newlesson}
                            name="newlesson"
                            onChange={handleChanges}
                        />
                        <button>Add Lesson</button>
                    </label>
                </div>
            </form>
        </div>

    )
}
