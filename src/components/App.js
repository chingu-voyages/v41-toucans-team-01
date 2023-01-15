import "./App.css";
import Header from "./header/Header";
import WeatherPage from "./weather/WeatherPage";

const App = () => {
  return (
    <>
      <Header />
      <main className="content-container">
        <WeatherPage />
      </main>
    </>
  );
};

export default App;
