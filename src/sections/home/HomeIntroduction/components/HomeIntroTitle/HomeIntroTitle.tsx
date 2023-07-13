import cls from './HomeIntroTitle.module.css';
import { AudioPlayer, NavigationLink, NavigationLinkVariants, Text, TextVariants } from 'shared/components';
import { RoutePaths } from 'app/providers/AppRouter';
import RedArrowIcon from 'shared/assets/icons/arrow-red-right.svg';
import agent from 'shared/assets/images/agent-home-page.png';
import firstSample from 'shared/samples/1a_ph.mp3';
import secondSample from 'shared/samples/1b_ph.mp3';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { scrollSmoothTo } from 'shared/lib';
import { Context } from 'app/providers/ContextProvider';

export const HomeIntroTitle = () => {
    return (
        <div className={cls.homeIntroTitle}>
            <div className={cls.info}>
                <Text tag="h1" variant={TextVariants.TITLE} classNamesProps={cls.title}>
                    Soften accents for clearer agent calls
                </Text>
                <Text classNamesProps={cls.paragraph} tag="p" variant={TextVariants.PARAGRAPH_TITLE}>
                    AI powered voice filter clarifies offshore agent voices as they speak, resulting in improved CSAT and sales metrics.
                </Text>
                <div className={cls.links}>
                    <NavigationLink classNamesProps={cls.actionLink} text="Request Demo" to={RoutePaths.REQUEST_DEMO} variant={NavigationLinkVariants.ACTION} />
                    <a onClick={() => scrollSmoothTo({ elementId: 'samples-examples', block: 'center' })} className={cls.action}>
                        <Text tag="p" variant={TextVariants.ACTION_RED}>More Examples</Text>
                        <RedArrowIcon/>
                    </a>
                </div>
            </div>
            <div className={cls.imageHolder}>
                <img alt="Agent photo" src={agent} className={cls.image} />
                <div className={cls.samplesHolder}>
                    <SampleExample audioId="main-original" src={firstSample} type='original' size='small' />
                    <SampleExample audioId="main-enhanced" src={secondSample} type='enhanced' size='small' />
                </div>
            </div>
        </div>
    );
};

interface SampleExampleProps {
    src: string;
    type: 'original' | 'enhanced';
    size: 'small' | 'large';
    audioId: string;
}

const SampleExample = (props: SampleExampleProps) => {
    const { src, type, size, audioId } = props;
    const classes = classNames(cls.sample, { [cls.enhanced]: type === 'enhanced' });

    const [isPlayed, setIsPlayed] = useState(false);
    const { playedAudio, onPlay } = useContext(Context);

    const toggle = () => setIsPlayed(prev => !prev);

    const onEnded = () => setIsPlayed(false);

    useEffect(() => {
        if(isPlayed) {
            onPlay(audioId);
        }
    }, [isPlayed]);

    useEffect(() => {
        if(playedAudio !== audioId) {
            onEnded();
        }
    }, [playedAudio]);

    return (
        <div onClick={toggle} className={classes}>
            <AudioPlayer audioId={audioId} onEnded={onEnded} isPlayedProp={isPlayed} src={src} type={type} size={size} />
            {type === 'original' ?
                <Text tag="p" variant={TextVariants.ACTION_RED}>Original</Text> :
                <Text tag="p" variant={TextVariants.ACTION}>Enhanced</Text>
            }
        </div>
    );
};

