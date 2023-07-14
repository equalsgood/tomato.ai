import cls from './Flag.module.css';
import { Tooltip, TooltipVariants } from 'shared/components';
import { useState } from 'react';

interface FlagProps {
    flag: string,
    country: string
}

export const Flag = (props: FlagProps) => {
    const { flag, country } = props;
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div
            className={cls.flag}
            onMouseOver={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <img alt={`image of ${country} flag`} src={flag} className={cls.flag} />
            {open &&
                <Tooltip text={country} variant={TooltipVariants.FLAG}/>
            }
        </div>
    );
};