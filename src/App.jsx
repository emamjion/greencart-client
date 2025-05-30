import { useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Router from "./routes/Router";

function App() {
  const isSellerPath = useLocation().pathname.includes("/seller");

  return (
    <>
      {isSellerPath ? null : <Navbar />}
      <div
        className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}
      >
        <Router />
      </div>
    </>
  );
}

export default App;
