import { useState, useEffect } from "react";
import moment from "moment";
import "./App.css";

import Popup from "./components/Popup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";
import Contents from "./components/Contents";
import { getBasicDayData, getDate, getSundayData } from "./api/api";
import {
  IDateData,
  SelectedDateType,
  SelectedTimeType,
} from "./interfaces/IDate";
import { IBasicData } from "./interfaces/IBasic";
import { ISundayData } from "./interfaces/ISunday";

function App() {
  const [isPopupShow, setIsPopupShow] = useState<boolean>(false);
  const [dateData, setDateData] = useState<IDateData[]>();
  const [basicDayData, setBasicDayData] = useState<IBasicData>();
  const [sundayData, setSundayData] = useState<ISundayData>();
  const [selectedDate, setSelectedDate] = useState<SelectedDateType>();
  const [selectedTime, setSelectedTime] = useState<SelectedTimeType>();

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

    const initDate = moment(dateResponse[0].date);

    // dateData 중 첫 번째 데이터로 set
    setSelectedDate({
      year: initDate.year(),
      month: initDate.month() + 1,
      date: initDate.date(),
      isSunday: initDate.weekday() === 0,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        date={dateData}
        setSelectedTime={setSelectedTime}
      />
      <Contents
        selectedDate={selectedDate}
        basicDayData={basicDayData}
        sundayData={sundayData}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
      <Footer selectedTime={selectedTime} setIsPopupShow={setIsPopupShow} />
      <Popup
        isPopupShow={isPopupShow}
        setIsPopupShow={setIsPopupShow}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
      />
    </div>
  );
}

export default App;
