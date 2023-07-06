import React from 'react';
import cls from './HomeComment.module.css';
import { Text, TextVariants } from 'shared/components';
import { PublicComment } from '../../HomeComments';
import classNames from 'classnames';

interface HomeCommentProps extends PublicComment {
    active: boolean;
}

export const HomeComment = (props: HomeCommentProps) => {
    const { picture, text, name, company, position, active } = props;
    const classes = classNames(cls.comment, { [cls.active]: active });

    return (
        <div className={classes}>
            <div className={cls.info}>
                <div className={cls.person}>
                    <img alt="picture of a commentator" src={picture} className={cls.image} />
                    <div className={cls.initials} >
                        <Text tag="p" variant={TextVariants.SUBTITLE_MEDIUM} classNamesProps={cls.name}>{name}</Text>
                        <Text tag="p" variant={TextVariants.DEFAULT_SMALL}>{position}</Text>
                    </div>
                </div>
                <Text tag="p" variant={TextVariants.BADGE_BLUE}>{company}</Text>
            </div>
            <div className={cls.text}>
                <Text tag="p" variant={TextVariants.PARAGRAPH_BLACK}>{text}</Text>
            </div>
        </div>
    );
};