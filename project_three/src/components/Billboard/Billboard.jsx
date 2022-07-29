import React, { Component } from 'react';

import style from './Billboard.module.css';

import imageHero from '../netflix-clone_assets/billboard.webp';
import imageTitle from '../netflix-clone_assets/billboard-title.webp';

import playIcon from '../netflix-clone_assets/play.svg'


class Billboard extends Component {
    state = {};
    render() {
        return (
            <div className={style.Billboard}>
                <div className={style.innerBill}>
                    <img src={imageHero} alt="hero image" />
                    <div className={style.title}>
                    <img src={imageTitle} alt="hero title"/>
                    <div className={style.btn}>
                        <a href="/">
                            <img src={playIcon} alt="playIcon" />
                            <span>play</span></a>
                        <button>pause</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Billboard;
