import React from 'react';
import cls from './SocialLinks.module.css';
import TwitterIcon from 'shared/assets/icons/twitter-light-icon.svg';
import LinkedInIcon from 'shared/assets/icons/linkedin-light-icon.svg';
import TelegramIcon from 'shared/assets/icons/telegram-light-icon.svg';
import InstagramIcon from 'shared/assets/icons/instagram-light-icon.svg';
import { hiddenLinks } from 'shared/lib';

export const SocialLinks = () => {
    const { social } = hiddenLinks;
    
    return (
        <>
            {social ?
                <div className={cls.placeholder}/> :
                <nav className={cls.socialLinks}>
                    <a target='_blank' rel='noreferrer' href='https://twitter.com/'><TwitterIcon/></a>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/'><LinkedInIcon/></a>
                    <a target='_blank' rel='noreferrer' href='https://web.telegram.org/'><TelegramIcon/></a>
                    <a target='_blank' rel='noreferrer' href='https://www.instagram.com/'><InstagramIcon/></a>
                </nav>
            }
        </>
    );
};