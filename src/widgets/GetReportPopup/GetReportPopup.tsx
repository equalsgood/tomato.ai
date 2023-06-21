import cls from './GetReportPopup.module.css';
import classNames from 'classnames';
import { Button, ButtonVariants, Input, Text, TextVariants } from 'shared/components';
import { InputValidations } from 'shared/lib';
import { FormEvent, useEffect, useState } from 'react';

interface GetReportPopupProps {
    open: boolean,
    onClose: () => void
}

export const GetReportPopup = (props: GetReportPopupProps) => {
    const { open, onClose } = props;

    const [popupInputValue, setPopupInputValue] = useState('');

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onClose();
    };

    const inputChangeHandler = (value: string) =>
        setPopupInputValue(value);

    useEffect(() => {
        const body = document.querySelector('body');

        if(open)
            body!.classList.add('modal-open');
        else
            body!.classList.remove('modal-open');

        return () => body!.classList.remove('modal-open');
    });

    return (
        <div className={classNames({ [cls.open]: open })}>
            <div className={cls.popup}>
                <div className={cls.popupContent}>
                    <Text tag="h2" variant={TextVariants.TITLE_SMALL_REVERSED} classNamesProps={cls.popupTitle}>One more step</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE_MEDIUM} classNamesProps={cls.popupParagraph}>Enter your email to get the <span className={cls.em}>custom detailed report</span> with more details about savings and other calculations</Text>
                    <form className={cls.popupForm} onSubmit={submitHandler}>
                        <Input
                            required
                            label="Enter Your Email"
                            type="email"
                            placeholder="Email@gmail.com"
                            validationType={InputValidations.NONE}
                            value={popupInputValue}
                            onInputChange={inputChangeHandler}
                        />
                        <Button
                            type="submit"
                            variant={ButtonVariants.ACTION}
                            text="Get Detailed Report"
                        />
                    </form>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.popupDisclaimer}>Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit.</Text>
                    <Button
                        variant={ButtonVariants.CLOSE}
                        classNamesProps={cls.close}
                        type='button'
                        onClick={onClose}
                    />
                </div>
            </div>
            <div className={cls.overlay} onClick={onClose}/>
        </div>
    );
};