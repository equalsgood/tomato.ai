import cls from './Modal.module.css';
import classNames from 'classnames';
import { ReactNode, useEffect } from 'react';

interface ModalProps {
    children: ReactNode,
    open: boolean,
    onClose: () => void
}

export const Modal = (props: ModalProps) => {
    const { children, open, onClose } = props;

    useEffect(() => {
        const body = document.querySelector('body');

        if(open)
            body!.classList.add('modal-open');
        else
            body!.classList.remove('modal-open');

        return () => body!.classList.remove('modal-open');
    }, [open]);

    return (
        <div className={classNames({ [cls.open]: open })}>
            <div className={cls.popup}>
                {children}
            </div>
            <div className={cls.overlay} onClick={onClose}/>
        </div>
    );
};