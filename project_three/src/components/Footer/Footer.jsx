import React, { Component } from 'react';

import style from './Footer.module.css';

import FooterSocialLink from '../FooterSocialLink';
import FooterLinks from '../FooterLinks';

class Footer extends Component {
    state = {};
    render() {
        return <footer>
            <FooterSocialLink />
            <FooterLinks />
        </footer>;
    }
}

export default Footer;
