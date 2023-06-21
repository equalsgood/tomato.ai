import cls from './Button.module.css';
import classNames from 'classnames';
import CloseIcon from 'shared/assets/icons/close-cross.svg';

export enum ButtonVariants {
    ACTION = 'action',
    CLOSE = 'close',
}

interface ButtonProps {
    type: 'submit' | 'button',
    text?: string,
    classNamesProps?: string,
    disabled?: boolean,
    onClick?: () => void,
    variant: ButtonVariants
}

export const Button = (props: ButtonProps) => {
    const { text, classNamesProps, disabled, onClick, variant, type } = props;

    const classes = classNames(cls.button, cls[variant], { [cls.disabled]: disabled }, classNamesProps);

    return (
        <button onClick={onClick} className={classes} disabled={disabled} type={type}>
            { variant === ButtonVariants.ACTION && text}
            { variant === ButtonVariants.CLOSE && <CloseIcon/>}
        </button>
    );
};