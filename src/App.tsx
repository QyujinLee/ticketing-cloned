import { useState } from "react";
import Popup from "./components/Popup";
import Header from "./components/Header";

import "./App.css";
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";
import Contents from "./components/Contents";

function App() {
  const [isPopupShow, setIsPopupShow] = useState(0);

  return (
    <div className="App">
      <Header />
      <Calendar />
      <Contents />
      <Footer />
      <div className="dimmed" />
      <Popup />
    </div>
  );
}

export default App;
