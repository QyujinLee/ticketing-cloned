import React, { useEffect, useState } from "react";
import { IBasicData } from "../interfaces/IBasic";
import { SelectedDateType, SelectedTimeType } from "../interfaces/IDate";
import { ISundayData } from "../interfaces/ISunday";
import { getBlankCntArr } from "../lib/common";

type ContentsProps = {
  selectedDate?: SelectedDateType;
  basicDayData?: IBasicData;
  sundayData?: ISundayData;
  selectedTime?: SelectedTimeType;
  setSelectedTime: React.Dispatch<
    React.SetStateAction<SelectedTimeType | undefined>
  >;
};

export default function Contents({
  selectedDate,
  basicDayData,
  sundayData,
  selectedTime,
  setSelectedTime,
}: ContentsProps) {
  const [selectedProductName, setSelectedProductName] = useState<string>("");
  const [targetData, setTargetData] = useState<
    IBasicData | ISundayData | undefined
  >(basicDayData);
  const [blankArr, setBlankArr] = useState<Array<string>>([]);

  /**
   * 시간 선택 시 이벤트 핸들러
   * @param time
   */
  const handleClickTime = (time: string) => {
    setSelectedTime({
      productName: selectedProductName,
      ticketPrice: targetData?.ticketPrice,
      time,
    });
  };

  useEffect(() => {
    if (!selectedDate || !sundayData || !basicDayData) return;

    if (selectedDate.isSunday) {
      setSelectedProductName(sundayData.productName);
      setTargetData(sundayData);
      setBlankArr(getBlankCntArr(sundayData));
    } else {
      setSelectedProductName(basicDayData.productName);
      setTargetData(basicDayData);
      setBlankArr(getBlankCntArr(basicDayData));
    }
  }, [selectedDate]);

  return (
    <div className="contents__wrap">
      <div className="product_name-wrap">
        <p className="product__name">{selectedProductName}</p>
      </div>
      <div className="btn__content-wrap">
        {targetData &&
          targetData.timeList.map((item) => (
            <div
              key={item.timeSlot}
              className={`btn__content 
              ${item.stockStatus === -1 ? "sold-out" : ""}
              ${item.stockStatus === 0 ? "relaxed" : ""}
              ${item.stockStatus === 1 ? "normal" : ""}
              ${
                selectedTime && selectedTime.time === item.timeSlot
                  ? "selected"
                  : ""
              }
              `}
              onClick={() => handleClickTime(item.timeSlot)}
            >
              <p className="time">{item.timeSlot}</p>
              <p className="status">
                {item.stockStatus === -1 ? "매진" : item.stockStatusStr}
              </p>
            </div>
          ))}
        {targetData &&
          blankArr.map((item) => (
            <div key={item} className="btn__content blank" />
          ))}
      </div>
    </div>
  );
}
