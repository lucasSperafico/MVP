const calcRM = (weight, reps) => {
  if (!weight || !reps) return "";

  const RM = weight * (1 + reps / 30);

  const formattedRM = RM.toFixed(2);

  return formattedRM;
};

const GymContent = ({ item, updateTraining }) => {
  const handleAddExercise = () => {
    const newExercise = {
      id: Date.now(),
      exerciseName: "",
      weight: "",
      reps: "",
    };

    updateTraining(item.id, {
      exercises: [...item.exercises, newExercise],
    });
  };

  const handleDeleteExercise = (exerciseId) => {
    updateTraining(item.id, {
      exercises: item.exercises.filter(
        (exercise) => exercise.id !== exerciseId,
      ),
    });
  };

  const updateExercise = (exerciseId, changes) => {
    updateTraining(item.id, {
      exercises: item.exercises.map((exercise) =>
        exercise.id === exerciseId ? { ...exercise, ...changes } : exercise,
      ),
    });
  };

  return (
    <div className="gym-container">
      <div className="exercise-title">
        {item.exercises.map((exercise) => (
          <div key={exercise.id} className="exercise-row">
            <div className="exercise-name-input">
              <label>Exercise:</label>
              <input
                type="text"
                placeholder="Name"
                value={exercise.exerciseName}
                onChange={(e) =>
                  updateExercise(exercise.id, {
                    exerciseName: e.target.value,
                  })
                }
              />
            </div>
            <div className="weight-input">
              <label>Kg</label>
              <input
                type="text"
                inputMode="decimal"
                maxLength={6}
                placeholder="0.0"
                value={exercise.weight}
                onFocus={(e) => e.target.select()}
                onChange={(e) =>
                  updateExercise(exercise.id, {
                    weight: e.target.value.replace(",", "."),
                  })
                }
              />
            </div>
            <div className="reps-input">
              <label >Reps</label>
              <input
                type="text"
                inputMode="decimal"
                maxLength={2}
                placeholder="0"
                value={exercise.reps}
                onFocus={(e) => e.target.select()}
                onChange={(e) =>
                  updateExercise(exercise.id, {
                    reps: e.target.value,
                  })
                }
              />
            </div>
            <div className="rm-input">
              <label>1RM</label>
              <input
                type="text"
                readOnly
                value={calcRM(exercise.weight, exercise.reps)}
              />
            </div>
            <div className="delete-button">
              <button
                className="delete-button-exercise"
                onClick={() => handleDeleteExercise(exercise.id)}
              >
                <img src="https://www.svgrepo.com/show/533030/xmark.svg" alt="delete Icon"/>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="add-exercise-button" onClick={handleAddExercise}>
        <img src="http://svgrepo.com/show/532925/circle-plus.svg" alt="Add Exercise Icon" />
      </button>
      <div className="notes-input">
        <textarea
          type="text"
          placeholder="Notes"
          value={item.notes}
          onChange={(e) => updateTraining(item.id, { notes: e.target.value })}
        />
      </div>
    </div>
  );
};

export default GymContent;
