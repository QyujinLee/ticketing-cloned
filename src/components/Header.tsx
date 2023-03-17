import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faEllipsis,
  faCheck,
  faCalendarCheck,
  faWonSign,
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div className="header__wrap">
      <div className="header">
        <p className="header__title">날짜 시간 선택</p>
        <FontAwesomeIcon className="btn__close" icon={faTimes} />
      </div>
      <div className="process">
        <div className="process__wrap first">
          <div className="icon__wrap">
            <FontAwesomeIcon className="process__ico" icon={faCheck} />
          </div>
          <span className="process__title">티켓선택</span>
        </div>
        <FontAwesomeIcon className="dotted-line first" icon={faEllipsis} />
        <div className="process__wrap second">
          <div className="icon__wrap">
            <FontAwesomeIcon className="process__ico" icon={faCalendarCheck} />
          </div>
          <span className="process__title">시간선택</span>
        </div>
        <FontAwesomeIcon className="dotted-line second" icon={faEllipsis} />
        <div className="process__wrap third">
          <div className="icon__wrap">
            <FontAwesomeIcon className="process__ico" icon={faWonSign} />
          </div>
          <span className="process__title">결제하기</span>
        </div>
      </div>
    </div>
  );
}
