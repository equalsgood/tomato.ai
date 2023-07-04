import cls from './BlogTitle.module.css';
import { BlogArticle } from 'pages/BlogPage/types';
import { Text, TextVariants } from 'shared/components';
import ArrowIcon from 'shared/assets/icons/arrow-blue-right.svg';

interface BlogTitleProps {
    article: BlogArticle
}

export const BlogTitle = ({ article }: BlogTitleProps) => {
    return (
        <section className={cls.section}>
            <img src={article.image} alt="main article image" className={cls.image}/>
            <div className={cls.info}>
                <Text tag="h2" variant={TextVariants.SUBTITLE_BOLD_REVERSED} classNamesProps={cls.title}>{article.title}</Text>
                <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.author}>Author: <span>{article.author}</span></Text>
                <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.description}>{article.description}</Text>
                <a target='_blank' rel='noreferrer' href={article.link} className={cls.link}>Read<ArrowIcon/></a>
            </div>
        </section>
    );
};