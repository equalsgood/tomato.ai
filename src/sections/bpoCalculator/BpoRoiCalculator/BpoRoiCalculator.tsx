import cls from './BpoRoiCalculator.module.css';
import { Input, Select, Text, TextVariants } from 'shared/components';
import { InputValidations } from 'shared/lib/validation';

export const BpoRoiCalculator = () => {
    return (
        <section className={cls.section}>
            <div className={cls.sectionTitle}>
                <Text tag="p" variant={TextVariants.BADGE} width={190}>SOME COOL TAG</Text>
                <Text tag="h1" variant={TextVariants.TITLE}>BPO ROI Calculator</Text>
                <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.titleParagraph}>Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. </Text>
            </div>
            <div className={cls.contentContainer}>
                <div className={cls.calculatorContainer}>
                    <div className={cls.calculator}>
                        <Input
                            type="text"
                            validationType={InputValidations.NUMBER}
                            info="information"
                            label="Number of Agents"
                            placeholder="1000"
                        />
                        <Select
                            label="Type of Agents"
                            info="information"
                        />
                        <Input
                            type="text"
                            validationType={InputValidations.MONEY}
                            info="information"
                            label="Monthly Cost per Agent"
                            placeholder="$2500"
                        />
                    </div>
                </div>
                <div className={cls.summary}>

                </div>
            </div>
        </section>
    );
};