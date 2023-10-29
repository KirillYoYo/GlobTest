import React, {useRef} from 'react';
import {userType} from "@src/components/UsersList/types";
import './userPopUpStyle.scss'

const UserPopUp = ({user, onCLose}: {user: userType | null, onCLose: React.MouseEventHandler<HTMLDivElement>}) => {
  const clickOutside = (event: React.SyntheticEvent) => {
    if (popUpRef.current && !popUpRef.current.contains(event.target)) {
      onCLose(null)
    }
  }
  const popUpRef = useRef(null);

  return (
    <div onClick={clickOutside} className="pop-up-wp">
      <div ref={popUpRef} className="pop-up user-pop-up">
        <div onClick={onCLose} className="close" />
        <div className="title">
          <h2>{user.name}</h2>
        </div>
        <div className="information">
          <div className="row">
            <div className="left pr-text">Телефон:</div>
            <div className="right sc-text">{user.phone}</div>
          </div>
          <div className="row">
            <div className="left pr-text">Почта:</div>
            <div className="right sc-text">{user.email}</div>
          </div>
          <div className="row">
            <div className="left pr-text">Дата приема:</div>
            <div className="right sc-text">{user.hire_date}</div>
          </div>
          <div className="row">
            <div className="left pr-text">Должность:</div>
            <div className="right sc-text">{user.position_name}</div>
          </div>
          <div className="row">
            <div className="left pr-text">Подразделение:</div>
            <div className="right sc-text">{user.department}</div>
          </div>
        </div>
        {/**/}
        <div className="additional-information">
          <p className='pr-text'>
            Дополнительная информация:
          </p>
          <p className='sc-text'>
            Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPopUp;