import cls from './HomeSoundExamples.module.css';
import { AudioPlayer, Flag, Text, TextVariants } from 'shared/components';
import GreenArrowIcon from 'shared/assets/icons/arrow-green-right.svg';
import classNames from 'classnames';
import IndiaFlag from 'shared/assets/flags/india.png';
import PhilippinesFlag from 'shared/assets/flags/philippines.png';
import HaitiFlag from 'shared/assets/flags/haiti.png';
import PakistanFlag from 'shared/assets/flags/pakistan.png';
import indiaOriginalSample from 'shared/samples/2a_in.wav';
import philOriginalSample from 'shared/samples/3a_ph.wav';
import haitiOriginalSample from 'shared/samples/4a_ht.wav';
import pakistanOriginalSample from 'shared/samples/5a_pk.wav';
import indiaEnhancedSample from 'shared/samples/2b_in.wav';
import philEnhancedSample from 'shared/samples/3b_ph.wav';
import haitiEnhancedSample from 'shared/samples/4b_ht.wav';
import pakistanEnhancedSample from 'shared/samples/5b_pk.wav';
import { scrollSmoothTo } from 'shared/lib';
import { useContext } from 'react';
import { Context } from 'app/providers/ContextProvider';

export const HomeSoundExamples = () => {
    const { isMobile } = useContext(Context);

    return (
        <div id="samples-examples" className={cls.examplesBoard}>
            <div className={cls.info}>
                <Text tag="p" variant={TextVariants.BADGE}>EXAMPLES</Text>
                <Text tag="h2" variant={TextVariants.TITLE_REVERSED} classNamesProps={cls.title}>Tomato.ai softens multiple types of accents</Text>
                <Text classNamesProps={cls.paragraph} tag="p" variant={TextVariants.PARAGRAPH_REVERSED}>As agents speak with an Indian, Filipino, or other accent, customers hear them pronouncing words more like native speakers. This improves intelligibility and reduces customer frustration. Compared to accent training the AI voice filter produces better results, faster.</Text>
                <a onClick={() => scrollSmoothTo({ elementId: 'benefits', block: 'center' })} className={cls.action}>
                    <Text tag="p" variant={TextVariants.ACTION}>Learn more</Text>
                    <GreenArrowIcon/>
                </a>
            </div>
            <div className={cls.examples}>
                <div className={classNames(cls.examplesSection, cls.original)}>
                    { !isMobile && <Text tag="p" variant={TextVariants.SUBTITLE_SMALL}>Original</Text>}
                    <ul className={cls.samples}>
                        {originalSamples.map(smpl =>
                            <li key={smpl.description} className={cls.sample}>
                                <img alt={`image of ${smpl.country} flag`} src={smpl.flag} className={cls.flag} />
                                <AudioPlayer audioId={smpl.audioId} src={smpl.src} type="original" size="large"/>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={classNames(cls.examplesSection, cls.enhanced)}>
                    { !isMobile && <Text tag="p" variant={TextVariants.SUBTITLE_SMALL}>Enhanced</Text> }
                    <ul className={cls.samples}>
                        {enhancedSamples.map(smpl =>
                            <li key={smpl.description} className={cls.sample}>
                                <AudioPlayer audioId={smpl.audioId} src={smpl.src} type="enhanced" size="large"/>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const originalSamples = [
    {
        country: 'India',
        description: 'indiaOriginalSample',
        flag: IndiaFlag,
        src: indiaOriginalSample,
        audioId: 'India-original'
    },
    {
        country: 'Philippines',
        description: 'philOriginalSample',
        flag: PhilippinesFlag,
        src: philOriginalSample,
        audioId: 'Philippines-original'
    },
    {
        country: 'Haiti',
        description: 'haitiOriginalSample',
        flag: HaitiFlag,
        src: haitiOriginalSample,
        audioId: 'Haiti-original'
    },
    {
        country: 'Pakistan',
        description: 'pakistanOriginalSample',
        flag: PakistanFlag,
        src: pakistanOriginalSample,
        audioId: 'Pakistan-original'
    },
];

const enhancedSamples = [
    {
        description: 'indiaEnhancedSample',
        src: indiaEnhancedSample,
        audioId: 'india-enhanced'
    },
    {
        description: 'philEnhancedSample',
        src: philEnhancedSample,
        audioId: 'phil-enhanced'
    },
    {
        description: 'haitiEnhancedSample',
        src: haitiEnhancedSample,
        audioId: 'haiti-enhanced'
    },
    {
        description: 'pakistanEnhancedSample',
        src: pakistanEnhancedSample,
        audioId: 'Pakistan-enhanced'
    },
];