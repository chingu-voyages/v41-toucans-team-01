import "./App.css";
import PrimaryNav from "./header/PrimaryNav";
import WeatherPage from "./weather/WeatherPage";

const App = () => {
  return (
    <>
      <PrimaryNav />
      <main className="content-container">
        <WeatherPage />
      </main>
    </>
  );
};

export default App;
