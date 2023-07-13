import { ReactNode } from 'react';
import cls from '../../Footer.module.css';
import { Text, TextVariants } from 'shared/components';
import classNames from 'classnames';

interface FooterColumnProps {
    title: string,
    children: ReactNode,
    classNamesProps?: string | undefined,
}

export const FooterColumn = (props: FooterColumnProps) => {
    return (
        <div className={classNames(cls.footerColumn, props.classNamesProps)}>
            <Text tag='h3' classNamesProps={cls.title} variant={TextVariants.SUBHEADER_LIGHT}>
                {props.title}
            </Text>
            {props.children}
        </div>
    );
};