import cls from './BlogCategoriesSelect.module.css';
import { BlogCategories } from 'pages/BlogPage/types';
import { Button, ButtonVariants, Text, TextVariants } from 'shared/components';

interface BlogCategoriesSelectProps {
    categories: Array<BlogCategories>;
    selectedCategory: BlogCategories;
    onCategorySelect: (category: BlogCategories) => void;
    filteredArticlesNumber: number;
}

export const BlogCategoriesSelect = (props: BlogCategoriesSelectProps) => {
    const { categories, selectedCategory, onCategorySelect, filteredArticlesNumber } = props;

    return (
        <section className={cls.section}>
            <div className={cls.titleContainer}>
                <Text tag="h2" variant={TextVariants.TITLE_SMALL} classNamesProps={cls.title}>Categories</Text>
                <Text tag="span" variant={TextVariants.PARAGRAPH_TITLE_MEDIUM} classNamesProps={cls.number}>{`(${filteredArticlesNumber})`}</Text>
                <Button
                    type="button"
                    variant={ButtonVariants.TEXT}
                    classNamesProps={cls.textButton}
                    onClick={() => onCategorySelect(BlogCategories.UNSET)}
                    text="See all posts"
                />
            </div>
            <div className={cls.categoriesContainer}>
                {categories.map(category =>
                    <Button
                        key={`${category}-category-button`}
                        text={category}
                        onClick={() => onCategorySelect(category)}
                        type="button"
                        classNamesProps={cls.option}
                        variant={category === selectedCategory ? ButtonVariants.ACTION : ButtonVariants.OPTION}
                    />
                )}
            </div>
        </section>
    );
};