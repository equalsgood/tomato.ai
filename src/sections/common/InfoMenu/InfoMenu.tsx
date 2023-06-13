import cls from './InfoMenu.module.css';
import PronunciationIconLight from 'shared/assets/icons/info-menu/pronunciation-light.svg';
import PronunciationIconDark from 'shared/assets/icons/info-menu/pronunciation-dark.svg';
import DistinctIconLight from 'shared/assets/icons/info-menu/distinct-light.svg';
import DistinctIconDark from 'shared/assets/icons/info-menu/distinct-dark.svg';
import QualityIconLight from 'shared/assets/icons/info-menu/quality-light.svg';
import QualityIconDark from 'shared/assets/icons/info-menu/quality-dark.svg';
import NoiseIconLight from 'shared/assets/icons/info-menu/noise-light.svg';
import NoiseIconDark from 'shared/assets/icons/info-menu/noise-dark.svg';
import { useState } from 'react';
import { InfoMenuItem } from './components/InfoMenuItem';
import classNames from 'classnames';

const MENU_ITEM_HEIGHT = 70;

interface InfoMenuProps {
    isEnterprise?: boolean;
}

export const InfoMenu = ({ isEnterprise = false }: InfoMenuProps) => {
    const [currentActiveMenuItem, setCurrentActiveMenuItem] = useState<number>(0);
    const [selectOffset, setSelectOffset] = useState<string>('translateY(0px)');
    
    const onItemChange = (index: number) => {
        setCurrentActiveMenuItem(index);
        setSelectOffset(`translateY(${MENU_ITEM_HEIGHT * index}px)`);
    };

    return (
        <section className={classNames(cls.menuWrapper, { [cls.dark]: isEnterprise })}>
            <div className={cls.menu}>
                <ul className={cls.menuItems}>
                    {menuItems.map((item, index) =>
                        <InfoMenuItem
                            key={item.title}
                            active={currentActiveMenuItem === index}
                            item={item}
                            index={index}
                            onItemChange={onItemChange}
                            isEnterprise={isEnterprise}
                        />
                    )}
                    <div className={cls.select} style={{ transform: selectOffset }}></div>
                </ul>
                <div className={cls.content}></div>
            </div>
        </section>
    );
};

export interface menuItem {
    iconLight: JSX.Element,
    iconDark: JSX.Element,
    title: string
}

const menuItems: Array<menuItem> = [
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