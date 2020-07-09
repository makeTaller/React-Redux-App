import React from 'react';
import { Lesson_form } from "./Components/LessonForm"
import { LessonList } from "./Components/LessonList"
import './App.css';

function App() {
  return (
    <div className="App">
    <Lesson_form/>
    <LessonList/>
    </div>
  );
}

export default App;
