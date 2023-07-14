import cls from './GetReportPopup.module.css';
import { Button, ButtonVariants, Input, Modal, Text, TextVariants } from 'shared/components';
import { FormEvent, useState } from 'react';
import isEmail from 'validator/lib/isEmail';

interface GetReportPopupProps {
    open: boolean,
    onClose: () => void
}

export const GetReportPopup = (props: GetReportPopupProps) => {
    const { open, onClose } = props;

    const [popupInputValue, setPopupInputValue] = useState('');
    const [isEmailValid, setIsEmailValid] = useState<boolean | undefined>(undefined);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onClose();
    };

    const inputChangeHandler = (value: string) => {
        setPopupInputValue(value);
        setIsEmailValid(isEmail(value));
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div className={cls.popupContent}>
                <Text tag="h2" variant={TextVariants.TITLE_REVERSED} classNamesProps={cls.popupTitle}>One more step</Text>
                <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE_MEDIUM} classNamesProps={cls.popupParagraph}>Enter your email to get the <span className={cls.em}>custom detailed report</span> with more details about savings and other calculations</Text>
                <form className={cls.popupForm} onSubmit={submitHandler}>
                    <Input
                        required
                        error="Invalid Email"
                        isValid={isEmailValid}
                        label="Business Email"
                        type="email"
                        placeholder="Email@gmail.com"
                        value={popupInputValue}
                        onInputChange={inputChangeHandler}
                    />
                    <Button
                        disabled={!isEmailValid}
                        classNamesProps={cls.button}
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
        </Modal>
    );
};
