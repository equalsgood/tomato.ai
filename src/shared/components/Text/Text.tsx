import React, { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Text.module.css';

export enum TextVariants {
    TITLE = 'title',
    TITLE_REVERSED = 'titleReversed',
    TITLE_LARGE = 'titleLarge',
    TITLE_LARGE_REVERSED = 'titleLargeReversed',
    TITLE_MEDIUM = 'titleMedium',
    TITLE_MEDIUM_REVERSED = 'titleMediumReversed',
    TITLE_EXTRA_SMALL = 'titleExtraSmall',
    TITLE_EXTRA_SMALL_REVERSED = 'titleExtraSmallReversed',
    SUBTITLE_MEDIUM = 'subtitleMedium',
    SUBTITLE_MEDIUM_REVERSED = 'subtitleMediumReversed',
    SUBTITLE_SMALL = 'subtitleSmall',
    PARAGRAPH_TITLE_MEDIUM = 'paragraphTitleMedium',
    PARAGRAPH_TITLE = 'paragraphTitle',
    PARAGRAPH_DARK_MEDIUM = 'paragraphDarkMedium',
    PARAGRAPH_DARK = 'paragraphDark',
    PARAGRAPH_BLACK = 'paragraphBlack',
    PARAGRAPH_DISABLED = 'paragraphDisabled',
    PARAGRAPH_REVERSED = 'paragraphReversed',
    PARAGRAPH_REVERSED_SMALL = 'paragraphReversedSmall',
    ACTION = 'action',
    ACTION_RED = 'actionRed',
    BADGE = 'badge',
    BADGE_BLUE = 'badgeBlue',
    DEFAULT = 'default',
    DEFAULT_SMALL = 'defaultSmall',
    SUBHEADER_LIGHT = 'subheaderLight',
    SUBHEADER_LIGHT_SMALL = 'subheaderLightSmall',
}

export type TextTags = 'h1' | 'h2' |'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';

export interface TextProps {
    tag: TextTags;
    children: ReactNode;
    variant: TextVariants;
    width?: number;
    classNamesProps?: string;
}

export const Text = (props: TextProps) => {
    const { children, variant, tag, width, classNamesProps } = props;
    const classes = classNames(cls.text, cls[variant], classNamesProps);

    if(tag === 'h1') {
        return <h1 style={{ width: `${width + 'px' || 'auto'}` }} className={classes}>{children}</h1>;
    }

    if(tag === 'h2') {
        return <h2 style={{ width: `${width + 'px' || 'auto'}` }} className={classes}>{children}</h2>;
    }

    if(tag === 'h3') {
        return <h3 style={{ width: `${width + 'px' || 'auto'}` }} className={classes}>{children}</h3>;
    }

    if(tag === 'h4') {
        return <h4 style={{ width: `${width + 'px' || 'auto'}` }} className={classes}>{children}</h4>;
    }

    if(tag === 'h5') {
        return <h5 style={{ width: `${width + 'px' || 'auto'}` }} className={classes}>{children}</h5>;
    }

    if(tag === 'h6') {
        return <h6 style={{ width: `${width + 'px' || 'auto'}` }} className={classes}>{children}</h6>;
    }

    if(tag === 'span') {
        return <span style={{ width: `${width + 'px' || 'auto'}` }} className={classes}>{children}</span>;
    }
    
    return <p style={{ width: `${width + 'px' || 'auto'}` }} className={classes}>{children}</p>;
};