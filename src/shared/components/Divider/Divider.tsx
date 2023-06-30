import cls from './Divider.module.css';
import classNames from 'classnames';

interface DividerProps {
    horizontal?: boolean,
}

export const Divider = (props: DividerProps) => {
    const { horizontal } = props;

    return (
        <div className={classNames(cls.divider, { [cls.horizontal]: horizontal })}/>
    );
};