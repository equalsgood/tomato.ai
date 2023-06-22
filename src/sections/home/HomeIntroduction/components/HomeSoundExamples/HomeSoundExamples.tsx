import cls from './HomeSoundExamples.module.css';
import { AudioPlayer, Flag, Text, TextVariants } from 'shared/components';
import GreenArrowIcon from 'shared/assets/icons/arrow-green-right.svg';
import classNames from 'classnames';
import IndiaFlag from 'shared/assets/flags/india.svg';
import PhilippinesFlag from 'shared/assets/flags/philippines.svg';
import HaitiFlag from 'shared/assets/flags/haiti.svg';
import PakistanFlag from 'shared/assets/flags/pakistan.svg';
import indiaOriginalSample from 'shared/samples/2a_in.wav';
import philOriginalSample from 'shared/samples/3a_ph.wav';
import haitiOriginalSample from 'shared/samples/4a_ht.wav';
import pakistanOriginalSample from 'shared/samples/5a_pk.wav';
import indiaEnhancedSample from 'shared/samples/2b_in.wav';
import philEnhancedSample from 'shared/samples/3b_ph.wav';
import haitiEnhancedSample from 'shared/samples/4b_ht.wav';
import pakistanEnhancedSample from 'shared/samples/5b_pk.wav';
import { scrollSmoothTo } from 'shared/lib';

export const HomeSoundExamples = () => {
    return (
        <div id="samples-examples" className={cls.examplesBoard}>
            <div className={cls.info}>
                <Text width={103} tag="p" variant={TextVariants.BADGE}>DEMO</Text>
                <Text width={432} tag="h2" variant={TextVariants.TITLE_SMALL_REVERSED}>Tomato.ai provides a brilliant quality in a LIVE format</Text>
                <Text width={413} tag="p" variant={TextVariants.PARAGRAPH_REVERSED}>Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Some NUMBERS “Our clients increase the ... 75%”</Text>
                <a onClick={() => scrollSmoothTo('benefits')} className={cls.action}>
                    <Text tag="p" variant={TextVariants.ACTION}>Learn more</Text>
                    <GreenArrowIcon/>
                </a>
            </div>
            <div className={cls.examples}>
                <div className={classNames(cls.examplesSection, cls.original)}>
                    <Text tag="p" variant={TextVariants.SUBTITLE_SMALL}>Original</Text>
                    <ul className={cls.samples}>
                        {originalSamples.map(smpl =>
                            <li key={smpl.description} className={cls.sample}>
                                <Flag flag={smpl.flag} country={smpl.country}/>
                                <AudioPlayer src={smpl.src} type="original" size="large"/>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={classNames(cls.examplesSection, cls.enhanced)}>
                    <Text tag="p" variant={TextVariants.SUBTITLE_SMALL}>Enhanced</Text>
                    <ul className={cls.samples}>
                        {enhancedSamples.map(smpl =>
                            <li key={smpl.description} className={cls.sample}>
                                <AudioPlayer src={smpl.src} type="enhanced" size="large"/>
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
        flag: <IndiaFlag/>,
        src: indiaOriginalSample,
    },
    {
        country: 'Philippines',
        description: 'philOriginalSample',
        flag: <PhilippinesFlag/>,
        src: philOriginalSample,
    },
    {
        country: 'Haiti',
        description: 'haitiOriginalSample',
        flag: <HaitiFlag/>,
        src: haitiOriginalSample,
    },
    {
        country: 'Pakistan',
        description: 'pakistanOriginalSample',
        flag: <PakistanFlag/>,
        src: pakistanOriginalSample,
    },
];

const enhancedSamples = [
    {
        description: 'indiaEnhancedSample',
        src: indiaEnhancedSample,
    },
    {
        description: 'philEnhancedSample',
        src: philEnhancedSample,
    },
    {
        description: 'haitiEnhancedSample',
        src: haitiEnhancedSample,
    },
    {
        description: 'pakistanEnhancedSample',
        src: pakistanEnhancedSample,
    },
];