import React, { Component } from 'react';

import style from './Billboard.module.css';

import BillboardIcon from './BillboardIcon';

class BillboardNav extends Component {
    state = {};
    render() {
        return (
            <div className={style.billboard}>
                <a href="">
                    <BillboardIcon />
                </a>
            </div>
        );
    }
}

export default BillboardNav;
