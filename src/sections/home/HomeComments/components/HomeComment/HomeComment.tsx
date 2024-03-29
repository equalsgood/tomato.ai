import React from 'react';
import cls from './HomeComment.module.css';
import { Text, TextVariants } from 'shared/components';
import { PublicComment } from '../../HomeComments';
import classNames from 'classnames';

export const HomeComment = (props: PublicComment) => {
    const { picture, text, name, companyImage, position } = props;
    const classes = classNames(cls.comment);

    return (
        <div className={classes}>
            <div className={cls.info}>
                <div className={cls.person}>
                    <img alt={`picture of a ${name}`} src={picture} className={cls.image} />
                    <div className={cls.initials} >
                        <Text tag="p" variant={TextVariants.SUBTITLE_MEDIUM} classNamesProps={cls.name}>{name}</Text>
                        <Text tag="p" variant={TextVariants.DEFAULT_SMALL}>{position}</Text>
                    </div>
                </div>
                <div className={cls.companyWrapper}>
                    <img className={cls.company} src={companyImage} alt={`logo of a company in which works ${name}`} />
                </div>
            </div>
            <div className={cls.text}>
                <Text tag="p" variant={TextVariants.PARAGRAPH_BLACK}>{text}</Text>
            </div>
        </div>
    );
};