export interface ITimeList {
  timeSlot: string;
  stcDetailId: string;
  stockStartTime: any | null;
  stockEndTime: any | null;
  stockUseYn: boolean;
  stockCount: number;
  totStockCount: number;
  enabled: boolean;
  operationStopYn: any | null;
  appOnlyYn: any | null;
  productDetailList: {
    prdDetailId: number;
    entranceStartTime: string;
    entranceEndTime: string;
    orderNo: number;
  }[];
  optionList: any | null;
  stockStatusStr: string;
  stockStatus: number;
}

export interface Data {
  prdId: number;
  dplId: number;
  productName: string;
  productDisplayName: string;
  reserveDt: string;
  riderCount: number;
  timeList: ITimeList[];
}

export interface ResponseData {
  code: string;
  message: string;
  data: Data;
}
