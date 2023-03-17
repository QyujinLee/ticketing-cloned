import React from 'react';

export default function Calendar() {
  return (
    <div className="calendar__wrap">
      <div className="month__wrap">
        <div className="month">2월</div>
        <div className="dates">
          <div className="date__wrap">
            <div className="date__container today">
              <p className="date">22</p>
              <p className="day">수</p>
            </div>
          </div>
          <div className="date__wrap">
            <div className="date__container">
              <p className="date">23</p>
              <p className="day">목</p>
            </div>
          </div>
          <div className="date__wrap">
            <div className="date__container">
              <p className="date">24</p>
              <p className="day">금</p>
            </div>
          </div>
          <div className="date__wrap">
            <div className="date__container">
              <p className="date">25</p>
              <p className="day">토</p>
            </div>
          </div>
          <div className="date__wrap">
            <div className="date__container sunday">
              <p className="date">26</p>
              <p className="day">일</p>
            </div>
          </div>
          <div className="date__wrap">
            <div className="date__container">
              <p className="date">27</p>
              <p className="day">월</p>
            </div>
          </div>
          <div className="date__wrap">
            <div className="date__container">
              <p className="date">28</p>
              <p className="day">화</p>
            </div>
          </div>
          <div className="date__wrap">
            <div className="date__container">
              <p className="date">29</p>
              <p className="day">수</p>
            </div>
          </div>
          <div className="date__wrap">
            <div className="date__container">
              <p className="date">30</p>
              <p className="day">목</p>
            </div>
          </div>
          <div className="date__wrap">
            <div className="date__container">
              <p className="date">31</p>
              <p className="day">금</p>
            </div>
          </div>
        </div>
      </div>

      <div className="month__wrap">
        <div className="month">3월</div>
        <div className="dates">
          <div className="date__wrap">
            <div className="date__container">
              <p className="date">1</p>
              <p className="day">토</p>
            </div>
          </div>
          <div className="date__wrap">
            <div className="date__container">
              <p className="date">2</p>
              <p className="day">일</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
