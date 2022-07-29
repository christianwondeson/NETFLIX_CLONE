import React, { Component } from 'react';

import style from './Navigation.module.css';

import Netflix_image from '../netflix-clone_assets/logo.png'

import SecondaryNav from '../SecondaryNavigation/SecondaryNav';

class Navigation extends Component {
    state = {};
    render() {
        const Navigation = ['Home', 'Tv Shows', 'Movies', 'New & Popular', 'My List'];
        return (
            <div className={style.navigation}>
                <div className={style.navContainer}>
                <img src={Netflix_image } alt="Netflix_image" className={style.logo} />
                <ul className={style.navbars}>
                    {Navigation.map(navs => (
                        <li key={navs} className={style.navList} > <a href="">{navs}</a></li>
                    ))}
                </ul>
                </div>
                <SecondaryNav />
            </div>
        );
    }
}

export default Navigation;
