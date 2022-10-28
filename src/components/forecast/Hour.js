import "./Hour.css";

const Hour = ({ time, icon, temp }) => {
  return (
    <div className="hour">
      <div className="hour-id">{time}</div>
      <div className="hour-data">
        <span className="hour-icon">
          <img src={`./icons/${icon}`} alt="temp-icon" />
        </span>
        <span className="hour-temp">{temp}</span>
      </div>
    </div>
  );
};

export default Hour;
