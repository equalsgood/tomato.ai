import cls from './BlogArticles.module.css';
import { BlogArticle } from 'pages/BlogPage/types';
import { Text, TextVariants } from 'shared/components';
import ArrowIcon from 'shared/assets/icons/arrow-blue-right.svg';

interface BlogArticlesProps {
    filteredArticles: Array<BlogArticle>
}

export const BlogArticles = (props: BlogArticlesProps) => {
    const { filteredArticles } = props;

    return (
        <section className={cls.section}>
            {filteredArticles.map((article, index) =>
                <div
                    key={`${article.title}-${article.author}-${index}`}
                    className={cls.articleWrapper}
                >
                    <img src={article.image} alt={`main image of the article ${article.title}`} className={cls.image} />
                    <div className={cls.info}>
                        <div className={cls.rowWrapper}>
                            <Text tag="h2" variant={TextVariants.SUBTITLE_MEDIUM} classNamesProps={cls.title}>{article.title}</Text>
                            <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.author}><span>{article.author}</span></Text>
                        </div>
                        <div className={cls.rowWrapper}>
                            <Text tag="p" variant={TextVariants.PARAGRAPH_DARK} classNamesProps={cls.description}>{article.description}</Text>
                            <a target='_blank' rel='noreferrer' href={article.link} className={cls.link}>Read<div className={cls.icon}><ArrowIcon/></div></a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};