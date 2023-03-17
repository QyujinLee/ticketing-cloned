export default interface IDate {
  code: string;
  message: string;
  data: {
    dplId?: number;
    date: string;
    enabled: boolean;
    holidayYn: boolean;
  }[];
}
