import React from "react";
import { SelectedTimeType } from "../interfaces/IDate";

type FooterProps = {
  selectedTime?: SelectedTimeType;
  setIsPopupShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Footer({ selectedTime, setIsPopupShow }: FooterProps) {
  /**
   * 다음 버튼 클릭 시 이벤트 핸들러
   */
  const handleClickNext = () => {
    if (selectedTime) {
      setIsPopupShow(true);
    }
  };

  return (
    <div className="footer">
      <button className="btn__prev">이전</button>
      <button
        className={`btn__next ${selectedTime ? "" : "inactive"}`}
        onClick={handleClickNext}
      >
        다음
      </button>
    </div>
  );
}
