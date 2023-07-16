import cls from './ComparePlansMobileScroll.module.css';

interface ComparePlansMobileScrollProps {
    offset: number;
}

export const ComparePlansMobileScroll = ({ offset }: ComparePlansMobileScrollProps) => {
    return (
        <div className={cls.scrollWrapper}>
            <div className={cls.scrollContainer}>
                <div style={{ left: `${offset}%` }} className={cls.scroll}/>
            </div>
        </div>
    );
};