import React, { Component } from 'react';

import style from './FooterSocialLink.module.css';

import Facebook from './SocialMedia/Facebook'
import Insta from './SocialMedia/Insta';
import Twitter from './SocialMedia/Twitter';
import Youtube  from './SocialMedia/youtTube';

class FooterSocialLink extends Component {
    state = {};
    render() {
        return <div className={style.FooterSocialLink}>
            <a href="www.facebook.com" className={style.socialLinks}><Facebook /></a>
            <a href="www.instagram.com" className={style.socialLinks}><Insta /></a>
            <a href="www.twitter.com" className={style.socialLinks}><Twitter /></a>
            <a href="www.youtube.com" className={style.socialLinks}><Youtube /></a>
        </div>;
    }
}

export default FooterSocialLink;
