export default interface IBasic {
  code: string;
  message: string;
  data: {
    prdId: number;
    dplId: number;
    productName: string;
    productDisplayName: string;
    reserveDt: string;
    riderCount: number;
    timeList: {
      timeSlot: string;
      stcDetailId: string;
      stockStartTime: null;
      stockEndTime: null;
      stockUseYn: boolean;
      stockCount: number;
      totStockCount: number;
      enabled: boolean;
      operationStopYn: null;
      appOnlyYn: null;
      productDetailList: {
        prdDetailId: number;
        entranceStartTime: string;
        entranceEndTime: string;
        orderNo: number;
      }[];
      optionList: null;
      stockStatusStr: string;
      stockStatus: number;
    }[];
  };
}
