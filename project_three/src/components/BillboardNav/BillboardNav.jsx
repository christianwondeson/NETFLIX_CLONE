import React, { Component } from 'react';

import style from './Billboard.module.css';

import BillboardIcon from './BillboardIcon';

class BillboardNav extends Component {
    state = {  } 
    render() { 
        return (
            <div className={style.billboard}>
                <BillboardIcon />
            </div>
        );
    }
}
 
export default BillboardNav;