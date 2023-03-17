import React from "react";

export default function Popup() {
  return (
    <div className="popup">
      <div className="dtl__wrap">
        <p className="dtl__title">상품명</p>
        <p className="dtl__value">풀패키지(1인)</p>
      </div>
      <div className="dtl__wrap">
        <p className="dtl__title">날짜시간</p>
        <p className="dtl__value">2023.03.18 (토) 11:20</p>
      </div>
      <div className="dtl__wrap">
        <p className="dtl__title">구매인원</p>
        <p className="dtl__value">1명</p>
      </div>
      <div className="dtl__total-wrap">
        <p className="total__title">총 합계</p>
        <p className="total__value">49,500원</p>
      </div>
      <button className="btn__next-page">다음</button>
    </div>
  );
}
