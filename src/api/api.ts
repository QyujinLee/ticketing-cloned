import { IDateData } from "../interfaces/IDate";
import { IBasicData } from "../interfaces/IBasic";
import { ISundayData } from "../interfaces/ISunday";

/**
 * 날짜 데이터 GET API
 * @returns
 */
export const getDate = async (): Promise<IDateData[]> => {
  const response = await fetch("/json/date.json");
  const data = await response.json();
  return data.data;
};

/**
 * 평일 데이터 GET API
 * @returns
 */
export const getBasicDayData = async (): Promise<IBasicData> => {
  const response = await fetch("/json/basic.json");
  const data = await response.json();
  return data.data;
};

/**
 * 일요일 데이터 GET API
 * @returns
 */
export const getSundayData = async (): Promise<ISundayData> => {
  const response = await fetch("/json/sunday.json");
  const data = await response.json();
  return data.data;
};
