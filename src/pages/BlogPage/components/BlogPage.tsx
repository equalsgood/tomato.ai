import { BlogArticles, BlogCategoriesSelect, BlogTitle } from 'sections/blog';
import { BlogArticle, BlogCategories, BlogPageSchema } from '../types';
import blogImage from 'shared/assets/images/blog-example.png';
import { useEffect, useState } from 'react';

const BlogPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<BlogCategories>(blogConfig.categories[0]);
    const [filteredArticles, setFilteredArticles] = useState<Array<BlogArticle>>([]);

    const categorySelectHandler = (category: BlogCategories) =>
        setSelectedCategory(category);

    useEffect(() => {
        if(selectedCategory !== BlogCategories.UNSET) {
            const newFilteredArticles = blogConfig.articles.filter(article => article.category === selectedCategory);
            setFilteredArticles(newFilteredArticles);
        } else {
            setFilteredArticles(blogConfig.articles);
        }
    }, [selectedCategory]);

    return (
        <main>
            <BlogTitle article={blogConfig.mainArticle}/>
            <BlogCategoriesSelect
                filteredArticlesNumber={filteredArticles.length}
                selectedCategory={selectedCategory}
                categories={blogConfig.categories}
                onCategorySelect={categorySelectHandler}
            />
            <BlogArticles
                filteredArticles={filteredArticles}
            />
        </main>
    );
};

export default BlogPage;

const blogConfig: BlogPageSchema = {
    mainArticle: {
        title: 'Some title for the main article',
        description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur...',
        image: blogImage,
        link: 'https://medium.com/',
        author: 'Author',
        category: BlogCategories.ABOUT_COMPANY
    },
    categories: [
        BlogCategories.TECHNOLOGY, BlogCategories.INNOVATIONS, BlogCategories.BUSINESS, BlogCategories.PRODUCT, BlogCategories.ABOUT_COMPANY, BlogCategories.HOW_TO
    ],
    articles: [
        {
            title: 'Some ABOUT_COMPANY title',
            description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur...',
            image: blogImage,
            link: 'https://medium.com/',
            author: 'Authorrrr Authorrrrr',
            category: BlogCategories.ABOUT_COMPANY
        },
        {
            title: 'Some ABOUT_COMPANY title',
            description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur...',
            image: blogImage,
            link: 'https://medium.com/',
            author: 'Author',
            category: BlogCategories.ABOUT_COMPANY
        },
        {
            title: 'Some ABOUT_COMPANY title',
            description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur...',
            image: blogImage,
            link: 'https://medium.com/',
            author: 'Authorrrr Authorrrrr Authorrrrr',
            category: BlogCategories.ABOUT_COMPANY
        },
        {
            title: 'Some ABOUT_COMPANY title',
            description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur...',
            image: blogImage,
            link: 'https://medium.com/',
            author: 'Authorrrr Authorrrrr',
            category: BlogCategories.ABOUT_COMPANY
        },
        {
            title: 'Some TECHNOLOGY title',
            description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur...',
            image: blogImage,
            link: 'https://medium.com/',
            author: 'Authorrrr Authorrrrr',
            category: BlogCategories.TECHNOLOGY
        },
        {
            title: 'Some TECHNOLOGY title',
            description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur...',
            image: blogImage,
            link: 'https://medium.com/',
            author: 'Author',
            category: BlogCategories.TECHNOLOGY
        },
        {
            title: 'Some TECHNOLOGY title',
            description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur...',
            image: blogImage,
            link: 'https://medium.com/',
            author: 'Authorrrr Authorrrrr Authorrrrr',
            category: BlogCategories.TECHNOLOGY
        },
        {
            title: 'Some INNOVATIONS title',
            description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur...',
            image: blogImage,
            link: 'https://medium.com/',
            author: 'Authorrrr Authorrrrr',
            category: BlogCategories.INNOVATIONS
        },
        {
            title: 'Some INNOVATIONS title',
            description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur...',
            image: blogImage,
            link: 'https://medium.com/',
            author: 'Author',
            category: BlogCategories.INNOVATIONS
        },
        {
            title: 'Some PRODUCT title',
            description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur...',
            image: blogImage,
            link: 'https://medium.com/',
            author: 'Authorrrr Authorrrrr',
            category: BlogCategories.PRODUCT
        },
        {
            title: 'Some PRODUCT title',
            description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur...',
            image: blogImage,
            link: 'https://medium.com/',
            author: 'Author',
            category: BlogCategories.PRODUCT
        },
        {
            title: 'Some PRODUCT title',
            description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur...',
            image: blogImage,
            link: 'https://medium.com/',
            author: 'Authorrrr Authorrrrr Authorrrrr',
            category: BlogCategories.PRODUCT
        },{
            title: 'Some PRODUCT title',
            description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur...',
            image: blogImage,
            link: 'https://medium.com/',
            author: 'Authorrrr Authorrrrr',
            category: BlogCategories.PRODUCT
        },
        {
            title: 'Some PRODUCT title',
            description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum donec. Enim suspendisse massa viverra velit mollis amet velit. Eget eget nulla nisl facilisis quisque. Mauris arcu commodo natoque lobortis in. Lorem ipsum dolor sit amet consectetur...',
            image: blogImage,
            link: 'https://medium.com/',
            author: 'Author',
            category: BlogCategories.PRODUCT
        },
    ]
};