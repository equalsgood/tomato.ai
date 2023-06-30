import cls from './AboutFounder.module.css';
import { Founder } from '../AboutFounders';
import React, { useState } from 'react';
import classNames from 'classnames';
import LinkedinIcon from 'shared/assets/icons/linkedin-dark-icon.svg';
import { Text, TextVariants } from 'shared/components';

export const AboutFounder = (props: Founder) => {
    const { imageSrc, name, link, position, biography } = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <li
            className={cls.founder}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={imageSrc} alt={`picture of the founder ${name}`} />
            <div className={cls.shortInfo}>
                <span className={cls.name}>{name}</span>
                <span className={cls.position}>{position}</span>
            </div>
            <div className={classNames(cls.hoveredInfo, { [cls.hovered]: isHovered })}>
                <div className={cls.personal}>
                    <div className={cls.initials}>
                        <span className={cls.name}>{name}</span>
                        <span className={cls.position}>{position}</span>
                    </div>
                    <a target='_blank' rel='noreferrer' href={link}><LinkedinIcon/></a>
                </div>
                <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.biography}>{biography}</Text>
            </div>
        </li>
    );
};