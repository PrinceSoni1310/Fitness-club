import React, { useState } from 'react';
import Exercises from '../components/Exercises';

const ExercisesPage = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <div>
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default ExercisesPage;
