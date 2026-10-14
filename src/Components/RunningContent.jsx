const Pace = (km, duration) => {
  if (!km || !duration) return "";

  const pace = duration / km;

  const minutes = Math.floor(pace); // .floor = rounds down to the nearest integer
  const seconds = Math.round((pace - minutes) * 60); // .round = rounds the result of the expression to the nearest integer

  const formattedPace = `${minutes}:${String(seconds).padStart(2, "0")}`;

  return formattedPace;
};

const RunningContent = ({ item, updateTraining }) => {
  return (
    <div className="running">
      <div className="running-container">
        <div className="running-input">
          <img
            src="https://www.svgrepo.com/show/532408/chart-line.svg"
            alt="running-icon"
          />
          <input
            type="text"
            inputMode="decimal"
            maxLength={4}
            placeholder="0.0"
            value={item.km}
            onFocus={(e) => e.target.select()}
            onChange={(e) =>
              updateTraining(item.id, {
                km: e.target.value.replace(",", "."),
              })
            }
          />
          <label>Km</label>
        </div>
        <div className="pace-input">
          <img
            src="https://www.svgrepo.com/show/532105/clock-lines.svg"
            alt="pace-clock"
          />

          <input type="text" readOnly value={Pace(item.km, item.duration)} />
          <label>Min/km</label>
        </div>
      </div>
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

export default RunningContent;
