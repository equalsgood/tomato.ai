import cls from './InfoMenu.module.css';
import PronunciationIconLight from 'shared/assets/icons/info-menu/pronunciation-light.svg';
import PronunciationIconDark from 'shared/assets/icons/info-menu/pronunciation-dark.svg';
import DistinctIconLight from 'shared/assets/icons/info-menu/distinct-light.svg';
import DistinctIconDark from 'shared/assets/icons/info-menu/distinct-dark.svg';
import QualityIconLight from 'shared/assets/icons/info-menu/quality-light.svg';
import QualityIconDark from 'shared/assets/icons/info-menu/quality-dark.svg';
import NoiseIconLight from 'shared/assets/icons/info-menu/noise-light.svg';
import NoiseIconDark from 'shared/assets/icons/info-menu/noise-dark.svg';
import { Menu, MenuItem } from 'widgets';
import { useState } from 'react';
import classNames from 'classnames';


interface InfoMenuProps {
    isEnterprise?: boolean;
}

export const InfoMenu = ({ isEnterprise = false }: InfoMenuProps) => {
    const [currentMenuItemIndex, setCurrentMenuItemIndex] = useState(0);

    const changeHandler = (itemIndex: number) => setCurrentMenuItemIndex(itemIndex);

    return (
        <section className={classNames(cls.menuWrapper, { [cls.dark]: isEnterprise })}>
            <div className={cls.menu}>
                <Menu
                    isEnterprise={isEnterprise}
                    items={menuItems}
                    onItemChange={changeHandler}
                    withIcon
                />
                <div className={cls.content}></div>
            </div>
        </section>
    );
};

const menuItems: Array<MenuItem> = [
    {
        iconLight: <PronunciationIconLight/>,
        iconDark: <PronunciationIconDark/>,
        title: 'Clearer Pronunciation'
    },
    {
        iconLight: <QualityIconLight/>,
        iconDark: <QualityIconDark/>,
        title: 'Improve Voice Quality'
    },
    {
        iconLight: <NoiseIconLight/>,
        iconDark: <NoiseIconDark/>,
        title: 'Noise Cancellation'
    },
    {
        iconLight: <DistinctIconLight/>,
        iconDark: <DistinctIconDark/>,
        title: 'Distinct Voices'
    },
];