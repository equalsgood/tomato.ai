import { Fragment, memo, ReactNode } from 'react';
import cls from './Footer.module.css';
import FooterLogo from 'shared/assets/logos/footer-logo.svg';
import LocationIcon from 'shared/assets/icons/location-icon.svg';
import { NavigationLink, NavigationLinkVariants, SocialLinks, Text, TextVariants } from 'shared/components';
import { RoutePaths } from 'app/providers/AppRouter';


export const Footer = memo(() => {
    return (
        <footer className={cls.footer}>
            <div className={cls.logoColumn}>
                <FooterLogo/>
                <div className={cls.rightsContainer}>
                    <SocialLinks/>
                    <Text tag='p' variant={TextVariants.DEFAULT}>
                        ©2023 Tomato.ai. All rights reserved.
                    </Text>
                </div>
            </div>
            {footerConfig.map(column =>
                <FooterColumn key={`${column.title}-footer-column`} title={column.title}>
                    <div className={cls.footerLinks}>
                        {column.content.map((row, index) =>
                            <Fragment key={`${column.title}-${row.text}-${index}`}>
                                {row.to
                                    ?
                                    <NavigationLink key={`${column.title}-${row.text}=`} text={row.text} to={row.to} variant={NavigationLinkVariants.FOOTER} />
                                    :
                                    <Text tag='h4' variant={TextVariants.SUBHEADER_LIGHT_SMALL}>
                                        {row.text}
                                    </Text>
                                }
                            </Fragment>
                        )}
                    </div>
                </FooterColumn>
            )}
            <FooterColumn title="Contact">
                <div className={cls.footerLinks}>
                    <a className={cls.mailLink} href = "mailto: customersupport@tomato.ai">customersupport@tomato.ai</a>
                    <div className={cls.footerLocation}>
                        <LocationIcon/>
                        <Text tag="p" variant={TextVariants.DEFAULT_SMALL}>New York, NY 20-124</Text>
                    </div>
                    <NavigationLink text="Terms" to={RoutePaths.HOME} variant={NavigationLinkVariants.FOOTER} />
                </div>
            </FooterColumn>
        </footer>
    );
});

Footer.displayName = 'Footer';

interface FooterColumnProps {
    title: string,
    children: ReactNode,
}

const FooterColumn = (props: FooterColumnProps) => {
    return (
        <div className={cls.footerColumn}>
            <Text tag='h3' variant={TextVariants.SUBHEADER_LIGHT}>
                {props.title}
            </Text>
            {props.children}
        </div>
    );
};

interface FooterRow {
    text: string;
    to?: RoutePaths;
}

interface IFooterColumn {
    title: string;
    content: Array<FooterRow>
}

const footerConfig: Array<IFooterColumn> = [
    {
        title: 'Use Cases',
        content: [
            {
                text: 'BPOs'
            },
            {
                text: 'Overview',
                to: RoutePaths.HOME,
            },
            {
                text: 'ROI Calculator',
                to: RoutePaths.HOME,
            },
            {
                text: 'Enterprises'
            },
            {
                text: 'Overview',
                to: RoutePaths.HOME,
            },
            {
                text: 'ROI Calculator',
                to: RoutePaths.HOME,
            },
        ]
    },
    {
        title: 'Company',
        content: [
            {
                text: 'About',
                to: RoutePaths.HOME,
            },
            {
                text: 'Pricing',
                to: RoutePaths.HOME,
            },
            {
                text: 'Careers',
                to: RoutePaths.HOME,
            },
            {
                text: 'Blog',
                to: RoutePaths.HOME,
            },
            {
                text: 'Request Demo',
                to: RoutePaths.HOME,
            },
            {
                text: 'Brand guidelines',
                to: RoutePaths.HOME,
            },
        ]
    },
    {
        title: 'Privacy',
        content: [
            {
                text: 'Security',
                to: RoutePaths.HOME,
            },
            {
                text: 'Ethics',
                to: RoutePaths.HOME,
            },
            {
                text: 'Terms',
                to: RoutePaths.HOME,
            },
            {
                text: 'Privacy',
                to: RoutePaths.HOME,
            },
        ]
    },
];