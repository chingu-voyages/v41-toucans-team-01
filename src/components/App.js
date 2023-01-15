import "./App.css";
import PrimaryNav from "./navigations/PrimaryNav";
import SecondaryNav from "./navigations/SecondaryNav";
import WeatherPage from "./weather/WeatherPage";

const App = () => {
  return (
    <>
      <PrimaryNav />
      <main className="content-container">
        <WeatherPage />
      </main>
      <SecondaryNav />
    </>
  );
};

export default App;
