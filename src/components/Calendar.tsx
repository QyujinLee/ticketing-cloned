import React, { useEffect, useState } from "react";
import _, { Dictionary } from "lodash";
import moment from "moment";
import "moment/locale/ko";

import {
  IDateData,
  SelectedDateType,
  SelectedTimeType,
} from "../interfaces/IDate";
import { getDayStrKo } from "../lib/common";

type CalendarProps = {
  date?: IDateData[];
  selectedDate?: SelectedDateType;
  setSelectedDate: React.Dispatch<
    React.SetStateAction<SelectedDateType | undefined>
  >;
  setSelectedTime: React.Dispatch<
    React.SetStateAction<SelectedTimeType | undefined>
  >;
};

type DateArrType = Dictionary<DateDataType[]>;

type DateDataType = {
  targetYear: number;
  targetMonth: number;
  targetDate: number;
  dayStr: string;
  isSunday: boolean;
  isHoliday: boolean;
  isEnabled: boolean;
};

export default function Calendar({
  date,
  selectedDate,
  setSelectedDate,
  setSelectedTime,
}: CalendarProps) {
  const [dateArrMap, setDateArrMap] = useState<DateArrType>();

  /**
   * 날짜 선택 시 이벤트 핸들러
   * @param month
   * @param date
   * @param isEnabled
   * @returns
   */
  const handleClickDate = (item: DateDataType) => {
    const { targetYear, targetMonth, targetDate, isEnabled, isSunday } = item;
    if (!isEnabled) return;

    const currentSelected = {
      year: targetYear,
      month: targetMonth,
      date: targetDate,
      isSunday,
    };

    if (_.isEqual(selectedDate, currentSelected)) return;

    setSelectedDate(currentSelected);
    setSelectedTime(undefined);
  };

  useEffect(() => {
    if (date) {
      const originDateArr = date.map((item) => {
        const target = moment(item.date);
        return {
          targetYear: target.year(),
          targetMonth: target.month() + 1,
          targetDate: target.date(),
          dayStr: getDayStrKo(target.format("dddd")),
          isSunday: target.weekday() === 0,
          isHoliday: item.holidayYn,
          isEnabled: item.enabled,
        };
      });
      const groupedData = _.groupBy(originDateArr, "targetMonth");

      setDateArrMap(groupedData);
    }
  }, [date]);

  return (
    <div className="calendar__wrap">
      {dateArrMap &&
        Object.keys(dateArrMap).map((keyStr) => (
          <div className="month__wrap" key={keyStr}>
            <div className="month">{keyStr}월</div>
            <div className="dates">
              {dateArrMap[keyStr].map((item, idx) => (
                <div
                  className="date__wrap"
                  key={`${keyStr}_${item.targetDate}_${idx}`}
                  onClick={() => handleClickDate(item)}
                >
                  <div
                    className={`date__container 
                    ${item.isSunday ? "sunday" : ""} 
                    ${item.isHoliday ? "holiday" : ""}
                    ${
                      selectedDate &&
                      selectedDate.year === item.targetYear &&
                      selectedDate.month === item.targetMonth &&
                      selectedDate.date === item.targetDate
                        ? "selected"
                        : ""
                    }
                    ${item.isEnabled ? "" : "inactive"}`}
                  >
                    <p className="date">{item.targetDate}</p>
                    <p className="day">{item.dayStr}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
