import React, { Component } from 'react';

import style from './FooterLink.module.css';

class FooterLinks extends Component {
    state = {};
    render() {
        const links = [
            'Audio and Subtitles',
            'Audio Description',
            'Help Center',
            'Gift Cards',
            'Media Center',
            'Investor Relations',
            'Jobs',
            'Terms of Use',
            'Privacy',
            'Legal Notice',
            'Cookie Preferences',
            'Impressum',
            'Contact Us',
        ];

        return (
            <div className={style.FooterLinks}>
                <ul className={style.linkslist}>
                    {links.map(links => (
                        <li key={links.id} className={style.link}> <a href="/">{links}</a></li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default FooterLinks;
