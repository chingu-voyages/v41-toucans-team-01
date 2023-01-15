import "./App.css";
import PrimaryNav from "./navigations/PrimaryNav";
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
