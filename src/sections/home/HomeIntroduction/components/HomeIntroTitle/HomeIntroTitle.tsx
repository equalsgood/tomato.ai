import cls from './HomeIntroTitle.module.css';
import { AudioPlayer, NavigationLink, NavigationLinkVariants, Text, TextVariants } from 'shared/components';
import { RoutePaths } from 'app/providers/AppRouter';
import RedArrowIcon from 'shared/assets/icons/arrow-red-right.svg';
import agent from 'shared/assets/images/agent-home-page.png';
import firstSample from 'shared/samples/1a_ph.mp3';
import secondSample from 'shared/samples/1b_ph.mp3';
import classNames from 'classnames';
import { useState } from 'react';

export const HomeIntroTitle = () => {
    return (
        <div className={cls.homeIntroTitle}>
            <div className={cls.info}>
                <Text tag="h1" variant={TextVariants.TITLE}>
                    Soften accents for clearer agent calls
                </Text>
                <Text width={503} tag="p" variant={TextVariants.PARAGRAPH_TITLE}>
                    AI powered voice filter clarifies offshore agent voices as they speak, resulting in improved CSAT and sales metrics.
                </Text>
                <div className={cls.links}>
                    <NavigationLink text="Request Demo" to={RoutePaths.HOME} variant={NavigationLinkVariants.ACTION} />
                    <div className={cls.action}>
                        <Text tag="p" variant={TextVariants.ACTION_RED}>Listen Demos</Text>
                        <RedArrowIcon/>
                    </div>
                </div>
            </div>
            <div className={cls.imageHolder}>
                <img alt="Agent photo" src={agent} />
                <div className={cls.samplesHolder}>
                    <SampleExample src={firstSample} type='original' size='small' />
                    <SampleExample src={secondSample} type='enhanced' size='small' />
                </div>
            </div>
        </div>
    );
};

interface SampleExampleProps {
    src: string;
    type: 'original' | 'enhanced';
    size: 'small' | 'large';
}

const SampleExample = (props: SampleExampleProps) => {
    const { src, type, size } = props;
    const classes = classNames(cls.sample, { [cls.enhanced]: type === 'enhanced' });

    const [isPlayed, setIsPlayed] = useState(false);

    const toggle = () => setIsPlayed(prev => !prev);

    const onEnded = () => setIsPlayed(false);

    return (
        <div onClick={toggle} className={classes}>
            <AudioPlayer onEnded={onEnded} isPlayedProp={isPlayed} src={src} type={type} size={size} />
            {type === 'original' ?
                <Text tag="p" variant={TextVariants.ACTION_RED}>Original</Text> :
                <Text tag="p" variant={TextVariants.ACTION}>Enhanced</Text>
            }
        </div>
    );
};

