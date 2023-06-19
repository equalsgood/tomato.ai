import cls from './Button.module.css';
import classNames from 'classnames';

interface ButtonProps {
    text: string,
    classNamesProps?: string,
    disabled: boolean
}

export const Button = (props: ButtonProps) => {
    const { text, classNamesProps, disabled } = props;

    const classes = classNames(cls.button, { [cls.disabled]: disabled }, classNamesProps);

    return (
        <button className={classes} disabled={disabled}>
            {text}
        </button>
    );
};