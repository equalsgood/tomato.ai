import cls from './Faq.module.css';
import { Text, TextVariants } from 'shared/components';
import CloseIcon from 'shared/assets/icons/arrow-dropdown-down-l.svg';
import OpenIcon from 'shared/assets/icons/arrow-dropdown-up-l.svg';
import { useState } from 'react';
import classNames from 'classnames';

interface FaqProps {
    question: string,
    answer: string
}

export const Faq = (props: FaqProps) => {
    const { answer, question } = props;
    const [open, setOpen] = useState(false);

    return (
        <li className={classNames(cls.faq, { [cls.open]: open })}>
            <div className={cls.question} onClick={() => setOpen(prev => !prev)}>
                <Text tag="p" variant={TextVariants.SUBTITLE_MEDIUM}>{question}</Text>
                { open ?
                    <OpenIcon/> :
                    <CloseIcon/>
                }
            </div>
            <Text tag="p" variant={TextVariants.PARAGRAPH_BLACK} classNamesProps={cls.answer}>{answer}</Text>
        </li>
    );
};