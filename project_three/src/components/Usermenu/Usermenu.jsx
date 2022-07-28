import React, { Component } from 'react';

import style from './Usermenu.module.css'


class Usermenu extends Component {
    state = {  } 
    render() { 
        return (
            <div className={style.usermenu}>
                <div className={style.User}></div>
            </div>
        );
    }
}
 
export default Usermenu;