import { useState, useEffect } from "react";
import "./App.css";

import Popup from "./components/Popup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";
import Contents from "./components/Contents";
import { getBasicDayData, getDate, getSundayData } from "./api/api";
import IDate from "./interfaces/IDate";
import IBasic from "./interfaces/IBasic";
import { ResponseData as ISunday } from "./interfaces/ISunday";

function App() {
  const [isPopupShow, setIsPopupShow] = useState<boolean>(false);
  const [dateData, setDateData] = useState<IDate>();
  const [basicDayData, setBasicDayData] = useState<IBasic>();
  const [sundayData, setSundayData] = useState<ISunday>();

  /**
   * json데이터 GET
   */
  const fetchData = async () => {
    const dateResponse = await getDate();
    const basicDayResponse = await getBasicDayData();
    const sundayResponse = await getSundayData();

    setDateData(dateResponse);
    setBasicDayData(basicDayResponse);
    setSundayData(sundayResponse);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
