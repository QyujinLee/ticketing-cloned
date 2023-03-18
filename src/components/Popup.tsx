import React, { useState, useEffect } from "react";
import moment from "moment";
import { SelectedDateType, SelectedTimeType } from "../interfaces/IDate";
import { addCommas, getDayStrKo } from "../lib/common";

type PopupProps = {
  isPopupShow: boolean;
  setIsPopupShow: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDate?: SelectedDateType;
  selectedTime?: SelectedTimeType;
};

export default function Popup({
  isPopupShow,
  setIsPopupShow,
  selectedDate,
  selectedTime,
}: PopupProps) {
  const [totalDate, setTotalDate] = useState<string>("");

  /**
   * Dimmed 클릭 시 이벤트 핸들러
   */
  const handleClickDimmed = () => {
    setIsPopupShow(false);
  };

  useEffect(() => {
    if (!selectedDate || !selectedTime) return;

    const { year, month, date } = selectedDate;
    const targetDate = moment(`${year}.${month}.${date}`);
    const enDayStr = targetDate.format("dddd");

    setTotalDate(
      `${year}.${month}.${date} (${getDayStrKo(enDayStr)}) ${selectedTime.time}`
    );
  }, [selectedDate, selectedTime]);

  return (
    <>
      <div
        className={`dimmed ${isPopupShow ? "show" : ""}`}
        onClick={handleClickDimmed}
      />
      <div className={`popup ${isPopupShow ? "show" : ""}`}>
        <div className="dtl__wrap">
          <p className="dtl__title">상품명</p>
          <p className="dtl__value">{selectedTime?.productName}</p>
        </div>
        <div className="dtl__wrap">
          <p className="dtl__title">날짜시간</p>
          <p className="dtl__value">{totalDate}</p>
        </div>
        <div className="dtl__wrap">
          <p className="dtl__title">구매인원</p>
          <p className="dtl__value">1명</p>
        </div>
        <div className="dtl__total-wrap">
          <p className="total__title">총 합계</p>
          <p className="total__value">{`${addCommas(
            selectedTime?.ticketPrice
          )}원`}</p>
        </div>
        <button className="btn__next-page">다음</button>
      </div>
    </>
  );
}
