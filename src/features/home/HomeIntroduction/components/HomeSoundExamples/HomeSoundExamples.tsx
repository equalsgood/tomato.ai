import cls from './HomeSoundExamples.module.css';
import { Text, TextVariants } from 'shared/components';
import GreenArrowIcon from 'shared/assets/icons/arrow-green-right.svg';

export const HomeSoundExamples = () => {
    return (
        <div className={cls.examplesBoard}>
            <div className={cls.info}>
                <Text width={103} tag="p" variant={TextVariants.BADGE}>DEMO</Text>
                <Text width={432} tag="h2" variant={TextVariants.TITLE_REVERSED_SMALL}>Tomato.ai provides a brilliant quality in a LIVE format</Text>
                <Text width={413} tag="p" variant={TextVariants.PARAGRAPH_REVERSED}>Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Some NUMBERS “Our clients increase the ... 75%”</Text>
                <div className={cls.action}>
                    <Text tag="p" variant={TextVariants.ACTION}>Learn more</Text>
                    <GreenArrowIcon/>
                </div>
            </div>
            <div className={cls.examples}>1</div>
        </div>
    );
};