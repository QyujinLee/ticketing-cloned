import IDate from "../interfaces/IDate";
import IBasic from "../interfaces/IBasic";
import { ResponseData as ISunday } from "../interfaces/ISunday";

/**
 * 날짜 데이터 GET API
 * @returns
 */
export const getDate = async (): Promise<IDate> => {
  const response = await fetch("/json/date.json");
  const data = await response.json();
  return data.data;
};

/**
 * 평일 데이터 GET API
 * @returns
 */
export const getBasicDayData = async (): Promise<IBasic> => {
  const response = await fetch("/json/basic.json");
  const data = await response.json();
  return data.data;
};

/**
 * 일요일 데이터 GET API
 * @returns
 */
export const getSundayData = async (): Promise<ISunday> => {
  const response = await fetch("/json/sunday.json");
  const data = await response.json();
  return data.data;
};
