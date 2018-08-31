import React, {Component, Fragment} from "react";
import {Header, Footer} from "./Layouts";
import Exercises from "./Exercises";
import { muscles, exercises } from '../store';

export default class extends Component {
  state = {
    exercises,
    category: '',
    exercise: {},
  }

  handleCategorySelect = category => {
    this.setState({ category });
  }

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({ 
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }));
  }

  getExercisesByMuscles () {
    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})
    
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise
      exercises[muscles] = [...exercises[muscles], exercise]
      return exercises;
    }, initExercises)
    )
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises })=> ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  handleExerciseDelete = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter((exercise) => exercise.id !== id),
      editMode: false,
      exercise: {}
    }));
  }

  handleExerciseSelectEdit = id => 
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true,
    }))

  handleExerciseEdit = exercise =>{
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter((ex) => ex.id !== exercise.id),
        exercise
      ],
      exercise
    }))
    console.log(this.state.exercise)
  } 
  
  

  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise, editMode } = this.state
    return (
     <Fragment>
        <Header 
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises 
          onSelect={this.handleExerciseSelect}
          category={category}
          exercises={exercises}
          exercise={exercise}
          editMode={editMode}
          muscles={muscles}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          onEdit={this.handleExerciseEdit}
        />
        <Footer 
          onSelect={this.handleCategorySelect}
          muscles={muscles}
          category={ category }
        />
      </Fragment>
  )}
}
