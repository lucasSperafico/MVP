
const calcSparring = (wins, losses) => {
  const total = wins + losses;

  const winPercentage = total > 0 ? (wins / total) * 100 : 0;

  const lossPercentage = total > 0 ? (losses / total) * 100 : 0;

  return { total, winPercentage, lossPercentage };
};

const SparringBar = ({ wins, losses }) => {
  const { total, winPercentage, lossPercentage } = calcSparring(
    Number(wins),
    Number(losses),
  );

  if (total === 0) return <div className="sparring-bar bar-empty">N/A</div>;

  return (
    <div className="sparring-bar">
      {wins > 0 && (
        <div className="bar-wins" style={{ width: `${winPercentage}%` }}>
          {wins}
        </div>
      )}
      {losses > 0 && (
        <div className="bar-losses" style={{ width: `${lossPercentage}%` }}>
          {losses}
        </div>
      )}
    </div>
  );
};

const JiuJitsuContent = ({ item, updateTraining }) => {
  return (
    <div className="sparring-input">
      <SparringBar wins={item.sparrings.wins} losses={item.sparrings.losses} />

      <div className="sparring-fields">
        <div className="sparring-field">
          <input
            type="text"
            inputMode="numeric"
            maxLength={1}
            placeholder="0"
            value={item.sparrings.wins}
            onFocus={(e) => e.target.select()}
            onChange={(e) =>
              updateTraining(item.id, {
                sparrings: {
                  ...item.sparrings,
                  wins: e.target.value === "" ? "" : Number(e.target.value),
                },
              })
            }
          />
          <label>W</label>

          <input
            type="text"
            inputMode="numeric"
            maxLength={1}
            placeholder="0"
            value={item.sparrings.losses}
            onFocus={(e) => e.target.select()}
            onChange={(e) =>
              updateTraining(item.id, {
                sparrings: {
                  ...item.sparrings,
                  losses: e.target.value === "" ? "" : Number(e.target.value),
                },
              })
            }
          />
          <label>L</label>
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

export default JiuJitsuContent;
