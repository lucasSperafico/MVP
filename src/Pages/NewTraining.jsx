import React, { useState } from "react";
import "./NewTraining.css";
import JiuJitsuContent from "../Components/JiuJitsuContent";
import RunningContent from "../Components/RunningContent";
import GymContent from "../Components/GymContent";

const NewTraining = () => {
  const [training, setTraining] = useState([]);
  const [titleInput, setTitleInput] = useState("");

  const handleAddTraining = () => {
    if (titleInput.trim() !== "") {
      //.trim para que mesmo que tenha um espaço em branco ele possa verificar

      setTraining([
        ...training, // ... = spread operator, para manter os antigos e adicionar os novos
        {
          id: Date.now(),
          title: titleInput,
          type: "",
          date: getToday(),
          duration: "",
          intensity: 1,
          sparrings: {
            //Jiu-jitsu
            wins: "",
            losses: "",
          },
          km: "", //Running
          exercises: [], //Gym
          notes: "",
        },
      ]);

      setTitleInput("");
    }
  };

  const getToday = () => {
    return new Date().toISOString().split("T")[0];
  };

  const handleDeleteTraining = (id) => {
    setTraining(training.filter((t) => t.id !== id));
  };

  const updateTraining = (id, changes) => {
    setTraining(training.map((t) => (t.id === id ? { ...t, ...changes } : t)));
  };

  return (
    <>
      <div className="training-container">
        <h1>New Training</h1>

        <div className="input-container">
          <input
            type="text"
            className="title-input"
            placeholder="Enter title"
            value={titleInput}
            onChange={(event) => {
              setTitleInput(event.target.value);
            }}
          />

          <button className="add-training-button" onClick={handleAddTraining}>
            Add Training
          </button>
        </div>
      </div>

      <div className="training_main">
        {training.map((item, index) => (
          <div key={item.id} className="training-card">
            <div className="title_training">
              <h3>{item.title}</h3>

              <button
                className="delete-button-training"
                onClick={() => handleDeleteTraining(item.id)}
              >
                <img
                  src="https://www.svgrepo.com/show/533007/trash.svg"
                  alt="delete"
                />
              </button>
            </div>

            <div className="training-inside-list">
              <div className="type-select">
                <img
                  src="https://www.svgrepo.com/show/532842/bolt.svg"
                  alt="bolt"
                />

                <select
                  value={item.type}
                  onChange={(e) =>
                    updateTraining(item.id, {
                      type: e.target.value,
                    })
                  }
                >
                  <option value="">Select the type</option>
                  <option value="gym-workout">Gym Workout</option>
                  <option value="jiu-jitsu">Jiu-Jitsu</option>
                  <option value="running">Running</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="date-input">
                <img
                  src="https://www.svgrepo.com/show/533389/calendar-days.svg"
                  alt="calendar"
                />

                <input
                  type="date"
                  value={item.date}
                  onChange={(e) =>
                    updateTraining(item.id, {
                      date: e.target.value,
                    })
                  }
                />
              </div>

              <div className="duration-input">
                <img
                  src="https://www.svgrepo.com/show/532129/stopwatch.svg"
                  alt="stopwatch"
                />

                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={3}
                  placeholder="120"
                  value={item.duration}
                  onChange={(e) =>
                    updateTraining(item.id, {
                      duration: e.target.value,
                    })
                  }
                />

                <label>Min</label>
              </div>

              <div className="intensity-input">
                <img
                  src="https://www.svgrepo.com/show/532831/battery-bolt.svg"
                  alt="battery"
                />

                <input
                  type="range"
                  min={1}
                  max={10}
                  value={item.intensity}
                  onChange={(e) =>
                    updateTraining(item.id, {
                      intensity: Number(e.target.value),
                    })
                  }
                />

                <output
                  className="intensity-value"
                  style={{
                    left: `calc(${((item.intensity - 1) * 100) / 9}% - 14px)`,
                  }}
                >
                  {item.intensity}
                </output>
              </div>

              <div className="specs">
                {item.type === "jiu-jitsu" ? (
                  <JiuJitsuContent
                    item={item}
                    updateTraining={updateTraining}
                  />
                ) : item.type === "running" ? (
                  <RunningContent 
                    item={item} 
                    updateTraining={updateTraining} />
                ) : item.type === "gym-workout" ? (
                  <GymContent 
                    item={item} 
                    updateTraining={updateTraining} />
                ) : <div className="notes-input">
                      <textarea
                        type="text"
                        placeholder="Notes"
                        value={item.notes}
                        onChange={(e) => updateTraining(item.id, { notes: e.target.value })}
                      />
                  </div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewTraining;
