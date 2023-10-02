import cls from './InfoMenu.module.css';
import PronunciationIconLight from 'shared/assets/icons/info-menu/pronunciation-light.svg';
import PronunciationIconDark from 'shared/assets/icons/info-menu/pronunciation-dark.svg';
import DistinctIconLight from 'shared/assets/icons/info-menu/distinct-light.svg';
import DistinctIconDark from 'shared/assets/icons/info-menu/distinct-dark.svg';
import QualityIconLight from 'shared/assets/icons/info-menu/quality-light.svg';
import QualityIconDark from 'shared/assets/icons/info-menu/quality-dark.svg';
import NoiseIconLight from 'shared/assets/icons/info-menu/noise-light.svg';
import NoiseIconDark from 'shared/assets/icons/info-menu/noise-dark.svg';
//
import pronunciationOriginalSample from 'shared/samples/pronounciation_or.wav';
import pronunciationEnhancedSample from 'shared/samples/pronounciation_en.wav';
import improveOriginalSample from 'shared/samples/improve_or.wav';
import improveEnhancedSample from 'shared/samples/improve_en.wav';
import noiseOriginalSample from 'shared/samples/noise_or.wav';
import noiseEnhancedSample from 'shared/samples/noise_en.wav';
import preserveOriginalSample from 'shared/samples/distinct_or.wav';
import preserveEnhancedSample from 'shared/samples/distinct_en.wav';
//
import pronunciationImage from 'shared/assets/images/info-menu/pronunciation.png';
import pronunciationDarkImage from 'shared/assets/images/info-menu/pronunciation-dark.png';
import improveImage from 'shared/assets/images/info-menu/improve.png';
import improveDarkImage from 'shared/assets/images/info-menu/improve-dark.png';
import noiseImage from 'shared/assets/images/info-menu/noise.png';
import noiseDarkImage from 'shared/assets/images/info-menu/noise-dark.png';
import preserveImage from 'shared/assets/images/info-menu/preserve.png';
import preserveDarkImage from 'shared/assets/images/info-menu/preserve-dark.png';
//
import { Menu, MenuItem } from 'widgets';
import { useContext, useMemo, useState } from 'react';
import classNames from 'classnames';
import {
    MenuContentComponent,
    MenuContentComponentVariants
} from './components/MenuContentComponent/MenuContentComponent';
import { Context } from 'app/providers/ContextProvider';


interface InfoMenuProps {
    isEnterprise?: boolean;
}

export const InfoMenu = ({ isEnterprise = false }: InfoMenuProps) => {
    const [currentMenuItemIndex, setCurrentMenuItemIndex] = useState(0);
    const { onPlay } = useContext(Context);

    const changeHandler = (itemIndex: number) => {
        onPlay('');
        setCurrentMenuItemIndex(itemIndex);
    };

    const menuItems: Array<MenuItem> = useMemo(() => [
        {
            iconLight: <PronunciationIconLight/>,
            iconDark: <PronunciationIconDark/>,
            title: 'Clearer Pronunciation',
            RelatedSectionComponent: <MenuContentComponent
                isEnterprise={isEnterprise}
                title="Clearer Pronunciation"
                paragraph="Tomato.ai softens the accent of agents in real-time as they speak. The solution works for heavily and lightly accented agents. The accent heard by customers is set based on their geography."
                audioOriginalSrc={pronunciationOriginalSample}
                audioEnhancedSrc={pronunciationEnhancedSample}
                imageSrc={pronunciationImage}
                imageDarkSrc={pronunciationDarkImage}
                variant={MenuContentComponentVariants.Pronunciation}
            />
        },
        {
            iconLight: <QualityIconLight/>,
            iconDark: <QualityIconDark/>,
            title: 'Improve Voice Quality',
            RelatedSectionComponent: <MenuContentComponent
                isEnterprise={isEnterprise}
                title="Improve Voice Quality"
                paragraph="Tomato.ai clears up the voice of an agent. If the agent is hard to hear, or breathy, or choppy, the solution using AI enhances the voice. Customers then are less annoyed by such issues, which are common on calls."
                audioOriginalSrc={improveOriginalSample}
                audioEnhancedSrc={improveEnhancedSample}
                imageSrc={improveImage}
                imageDarkSrc={improveDarkImage}
                variant={MenuContentComponentVariants.Quality}
            />
        },
        {
            iconLight: <NoiseIconLight/>,
            iconDark: <NoiseIconDark/>,
            title: 'Noise Cancellation',
            RelatedSectionComponent: <MenuContentComponent
                isEnterprise={isEnterprise}
                title="Noise Cancellation"
                paragraph="Tomato.ai removes background noises that are common on sales and support calls. Noise removal covers work from home noises like kids or pets, and call center noises like other agents in the background."
                audioOriginalSrc={noiseOriginalSample}
                audioEnhancedSrc={noiseEnhancedSample}
                imageSrc={noiseImage}
                imageDarkSrc={noiseDarkImage}
                variant={MenuContentComponentVariants.Cancellation}
            />
        },
        {
            iconLight: <DistinctIconLight/>,
            iconDark: <DistinctIconDark/>,
            title: 'Preserve Voices',
            RelatedSectionComponent: <MenuContentComponent
                isEnterprise={isEnterprise}
                title="Preserve Voices"
                paragraph="Tomato.ai softens the accent while preserving the voice and rhythm of the speaker. So agents still sound like themselves but it’s as if they took classes to reduce the level of accent that they have."
                audioOriginalSrc={preserveOriginalSample}
                audioEnhancedSrc={preserveEnhancedSample}
                imageSrc={preserveImage}
                imageDarkSrc={preserveDarkImage}
                variant={MenuContentComponentVariants.Preserve}
            />
        },
    ], [isEnterprise]);

    return (
        <section className={classNames(cls.menuWrapper, { [cls.dark]: isEnterprise })}>
            <div className={cls.menu}>
                <Menu
                    currentMenuItemIndex={currentMenuItemIndex}
                    isEnterprise={isEnterprise}
                    items={menuItems}
                    onItemChange={changeHandler}
                    withIcon
                />
                <div className={cls.content}>
                    {menuItems[currentMenuItemIndex]?.RelatedSectionComponent || <div/>}
                </div>
            </div>
        </section>
    );
};