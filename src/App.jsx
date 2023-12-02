import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />

      <AppRouter />
    </>
  );
};

export default App;
