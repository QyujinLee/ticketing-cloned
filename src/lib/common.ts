import { IBasicData } from "./../interfaces/IBasic";
import { ISundayData } from "./../interfaces/ISunday";
/**
 * 한국어 요일 조회
 * @param dayStr
 * @returns
 */
export const getDayStrKo = (dayStr: string): string => {
  let dayStrKo = "";

  switch (dayStr) {
    case "Monday":
      dayStrKo = "월";
      break;
    case "Tuesday":
      dayStrKo = "화";
      break;
    case "Wednesday":
      dayStrKo = "수";
      break;
    case "Thursday":
      dayStrKo = "목";
      break;
    case "Friday":
      dayStrKo = "금";
      break;
    case "Saturday":
      dayStrKo = "토";
      break;
    case "Sunday":
      dayStrKo = "일";
      break;
    default:
      break;
  }

  return dayStrKo;
};

/**
 * 3의 배수에 맞추기 위한 빈 컴포넌트 갯수 배열 반환
 * @param dayData
 * @returns
 */
export const getBlankCntArr = (dayData: ISundayData | IBasicData) => {
  let arr = new Array();

  switch (dayData.timeList.length % 3) {
    case 1:
      arr = new Array("none_1", "none_2");
      break;
    case 2:
      arr = new Array("none_1");
      break;
    default:
      break;
  }

  return arr;
};

/**
 * 세자리 수마다 콤마를 포함하여 반환 (소수 고려)
 * @param num
 * @returns
 */
export const addCommas = (num: number | undefined) => {
  if (!num) return;

  // 숫자를 문자열로 변환 후 쪼갠다.
  const parts = num.toString().split(".");
  // 첫 번째 문자열 부분에 콤마를 찍는다.
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // 문자열을 다시 합쳐서 반환한다.
  return parts.join(".");
};
