import { Fragment, memo, ReactNode } from 'react';
import cls from './Footer.module.css';
import FooterLogo from 'shared/assets/logos/footer-logo.svg';
import LocationIcon from 'shared/assets/icons/location-icon.svg';
import { NavigationLink, NavigationLinkVariants, SocialLinks, Text, TextVariants } from 'shared/components';
import { RoutePaths } from 'app/providers/AppRouter';
import { Link } from 'react-router-dom';


export const Footer = memo(() => {
    return (
        <footer className={cls.footer}>
            <div className={cls.logoColumn}>
                <Link to={RoutePaths.HOME}>
                    <FooterLogo/>
                </Link>
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
                to: RoutePaths.BPO,
            },
            {
                text: 'ROI Calculator',
                to: RoutePaths.BPO_CALCULATOR,
            },
            {
                text: 'Enterprises'
            },
            {
                text: 'Overview',
                to: RoutePaths.ENTERPRISE,
            },
            {
                text: 'ROI Calculator',
                to: RoutePaths.ENTERPRISE_CALCULATOR,
            },
        ]
    },
    {
        title: 'Company',
        content: [
            {
                text: 'About',
                to: RoutePaths.ABOUT,
            },
            {
                text: 'Pricing',
                to: RoutePaths.PRICING,
            },
            {
                text: 'Careers',
                to: RoutePaths.CAREERS,
            },
            {
                text: 'Blog',
                to: RoutePaths.HOME,
            },
            {
                text: 'Request Demo',
                to: RoutePaths.REQUEST_DEMO,
            },
            {
                text: 'Brand guidelines',
                to: RoutePaths.GUIDELINES,
            },
        ]
    },
    {
        title: 'Privacy',
        content: [
            {
                text: 'Security',
                to: RoutePaths.SECURITY,
            },
            {
                text: 'Ethics',
                to: RoutePaths.ETHICS,
            },
            {
                text: 'Terms',
                to: RoutePaths.TERMS,
            },
            {
                text: 'Privacy',
                to: RoutePaths.PRIVACY,
            },
        ]
    },
];