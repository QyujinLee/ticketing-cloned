export interface IDate {
  code: string;
  message: string;
  data: IDateData[];
}

export interface IDateData {
  dplId?: number;
  date: string;
  enabled: boolean;
  holidayYn: boolean;
}

export type SelectedDateType = {
  year: number;
  month: number;
  date: number;
  isSunday: boolean;
};

export type SelectedTimeType = {
  productName: string;
  ticketPrice?: number;
  time: string;
};
