import React, { Component } from 'react';

import style from './SecondaryNav.module.css';

import Search from '../search';
import Notification from '../Notification';
import Usermenu from '../Usermenu/Usermenu';
import BillboardNav from '../BillboardNav';

class SecondaryNav extends Component {
    state = {};
    render() {
        return (
            <div className={style.secondaryNav}>
                <div className={style.navitem}>
                   <Search /> 
                </div>
                <div className={style.navitem}>
                    <Notification />
                    </div>
                    <div className={style.navitem}>
                    <Usermenu />
                    </div>
                    <div className={style.navitem}>
                    <BillboardNav />
                    </div>
            </div>
        );
    }
}

export default SecondaryNav;
