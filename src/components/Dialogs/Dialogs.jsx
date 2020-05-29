import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Андрей</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Юра</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Александр</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Миша</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Имя</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Привет</div>
                <div className={s.message}>Как дела?</div>
                <div className={s.message}>Пока</div>
            </div>
        </div>
    )
}

export default Dialogs;