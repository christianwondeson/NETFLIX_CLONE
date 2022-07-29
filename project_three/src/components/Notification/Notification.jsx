import React, { Component } from 'react';

import style from './Notifcation.module.css';

import NotIcon from './NotificationIcon';

class Notification extends Component {
    state = {};
    render() {
        return (
            <div className={style.Notification}>
                <a href="">
                    <NotIcon />
                </a>
            </div>
        );
    }
}

export default Notification;
