import "./App.css";
import PrimaryNav from "./navigations/PrimaryNav";
import SecondaryNav from "./navigations/SecondaryNav";
import HomePage from "./home/HomePage";

const App = () => {
  return (
    <>
      <PrimaryNav />
      <main className="content-container">
        <HomePage />
      </main>
      <SecondaryNav />
    </>
  );
};

export default App;
