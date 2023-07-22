import cls from './Button.module.css';
import classNames from 'classnames';
import CloseIcon from 'shared/assets/icons/close-cross.svg';

export enum ButtonVariants {
    ACTION = 'action',
    ACTION_BLUE = 'actionBlue',
    OUTLINED = 'outlined',
    TEXT = 'text',
    CLOSE = 'close',
    OPTION = 'option'
}

interface ButtonProps {
    type: 'submit' | 'button',
    text?: string,
    classNamesProps?: string,
    disabled?: boolean,
    onClick?: () => void,
    variant: ButtonVariants,
    endIcon?: JSX.Element,
}

export const Button = (props: ButtonProps) => {
    const { text, classNamesProps, disabled, onClick, variant, type, endIcon } = props;

    const classes = classNames(cls.button, cls[variant], { [cls.disabled]: disabled }, classNamesProps);

    return (
        <button onClick={onClick} className={classes} disabled={disabled} type={type}>
            { variant !== ButtonVariants.CLOSE && text}
            { variant === ButtonVariants.CLOSE && <CloseIcon/>}
            {endIcon &&
                <div className={cls.endIcon}>
                    {endIcon}
                </div>
            }
        </button>
    );
};