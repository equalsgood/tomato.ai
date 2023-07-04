export enum BlogCategories {
    TECHNOLOGY = 'Technology',
    INNOVATIONS = 'AI innovations',
    BUSINESS = 'Business',
    PRODUCT = 'Product',
    ABOUT_COMPANY = 'About Company',
    HOW_TO = '“How To?”',
    UNSET = 'Unset',
}

export interface BlogArticle {
    title: string;
    image: string;
    description: string;
    author: string;
    category: BlogCategories;
    link: string;
}

export interface BlogPageSchema {
    mainArticle: BlogArticle;
    articles: Array<BlogArticle>;
    categories: Array<BlogCategories>;
}