import cls from './BlogTitle.module.css';
import { MainArticle } from 'pages/BlogPage/types';
import { Text, TextVariants } from 'shared/components';
import ArrowIcon from 'shared/assets/icons/arrow-blue-right.svg';
import { useContext } from 'react';
import { Context } from 'app/providers/ContextProvider';

interface BlogTitleProps {
    article: MainArticle
}

export const BlogTitle = ({ article }: BlogTitleProps) => {
    const { isMobile } = useContext(Context);
    return (
        <section className={cls.section}>
            <img src={isMobile ? article.mobileImageForTitle : article.image} alt="main article image" className={cls.image}/>
            <div className={cls.infoContainer}>
                <div className={cls.info}>
                    <Text tag="h2" variant={TextVariants.TITLE_REVERSED} classNamesProps={cls.title}>{article.title}</Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.author}>Author: <span>{article.author}</span></Text>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.description}>{article.description}</Text>
                    <a target='_blank' rel='noreferrer' href={article.link} className={cls.link}>Read<div className={cls.icon}><ArrowIcon/></div></a>
                </div>
            </div>
        </section>
    );
};