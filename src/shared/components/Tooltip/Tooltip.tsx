import cls from './Tooltip.module.css';
import { Text, TextVariants } from 'shared/components';
import classNames from 'classnames';

export enum TooltipVariants {
    FLAG = 'flag',
    INFO = 'info'
}

interface TooltipProps {
    text: string,
    variant: TooltipVariants
}

export const Tooltip = (props: TooltipProps) => {
    const { text, variant } = props;

    return (
        <div className={classNames(cls.tooltip, cls[variant])}>
            <div className={cls.text}>
                <Text
                    tag="p"
                    variant={ variant === TooltipVariants.INFO ? TextVariants.PARAGRAPH_REVERSED : TextVariants.SUBTITLE_MEDIUM}
                    classNamesProps={cls.textContent}
                >
                    {text}
                </Text>
                <div className={cls.arrow} />
            </div>
        </div>
    );
};