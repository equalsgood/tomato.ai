import React from 'react';
import cls from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={cls.container}>
            <div className={cls['lds-ring']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};