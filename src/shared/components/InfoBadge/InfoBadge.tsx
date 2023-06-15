import cls from './InfoBadge.module.css';
import InfoIcon from 'shared/assets/icons/info.svg';
import { Text, TextVariants } from 'shared/components';
import { useState } from 'react';

interface InfoBadgeProps {
    text: string;
}

export const InfoBadge = ({ text }: InfoBadgeProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={cls.container}>
            <button
                className={cls.button}
                onMouseOver={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <InfoIcon/>
            </button>
            {open &&
                <div className={cls.tooltip}>
                    <div className={cls.info}>
                        <Text tag="p" variant={TextVariants.PARAGRAPH_REVERSED}>{text}</Text>
                    </div>
                    <div className={cls.arrow} />
                </div>
            }
        </div>
    );
};