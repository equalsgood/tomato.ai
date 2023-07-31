import { Fragment, memo, useContext, useEffect, useState } from 'react';
import cls from './Footer.module.css';
import FooterLogo from 'shared/assets/logos/footer-logo.svg';
import LocationIcon from 'shared/assets/icons/location-icon.svg';
import { NavigationLink, NavigationLinkVariants, SocialLinks, Text, TextVariants } from 'shared/components';
import { RoutePaths } from 'app/providers/AppRouter';
import { Link } from 'react-router-dom';
import { ContactUsPopup } from 'widgets';
import { FooterColumn } from './components/FooterColumn/FooterColumn';
import { Context } from 'app/providers/ContextProvider';
import { MobileFooter } from 'widgets/Footer/components/MobileFooter/MobileFooter';


export const Footer = memo(() => {
    const [open, setOpen] = useState<boolean>(false);

    const { screenWidth, hiddenLinks: { blog, security, pricing, terms } } = useContext(Context);
    //temporary hidden links logic
    const [footerConfig, setFooterConfig] = useState(initialFooterConfig);

    useEffect(() => {
        const newFooterConfig = [...footerConfig];

        if(blog) {
            const newColumnContent = newFooterConfig[1]?.content.filter(el => el.to !== RoutePaths.BLOG);
            newFooterConfig[1].content = [...newColumnContent];
        }

        if(pricing) {
            const newColumnContent = newFooterConfig[1]?.content.filter(el => el.to !== RoutePaths.PRICING);
            newFooterConfig[1].content = [...newColumnContent];
        }

        if(terms) {
            const newColumnContent = newFooterConfig[2]?.content.filter(el => el.to !== RoutePaths.TERMS);
            newFooterConfig[2].content = [...newColumnContent];
        }

        if(security) {
            const newColumnContent = newFooterConfig[2]?.content.filter(el => el.to !== RoutePaths.SECURITY);
            newFooterConfig[2].content = [...newColumnContent];
        }

        setFooterConfig(newFooterConfig);
    }, [blog, security, pricing, terms]);
    //

    if(screenWidth <= 550) {
        return (
            <MobileFooter config={footerConfig}/>
        );
    }

    return (
        <footer className={cls.footer}>
            <div className={cls.content}>
                <div className={cls.logoColumn}>
                    <Link className={cls.logo} to={RoutePaths.HOME}>
                        <FooterLogo/>
                    </Link>
                    <div className={cls.rightsContainer}>
                        <SocialLinks/>
                        <Text classNamesProps={cls.rights} tag='p' variant={TextVariants.DEFAULT}>
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
                                        <NavigationLink classNamesProps={cls.link} key={`${column.title}-${row.text}=`} text={row.text} to={row.to} variant={NavigationLinkVariants.FOOTER} />
                                        :
                                        <Text tag='h4' classNamesProps={cls.subheader} variant={TextVariants.SUBHEADER_LIGHT_SMALL}>
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
                        <button onClick={() => setOpen(true)} className={cls.mailLink}>Contact us</button>
                        <div className={cls.footerLocation}>
                            <LocationIcon/>
                            <Text tag="p" classNamesProps={cls.link} variant={TextVariants.DEFAULT_SMALL}>Danville, CA 94526</Text>
                        </div>
                    </div>
                </FooterColumn>
            </div>
            <ContactUsPopup open={open} onClose={() => setOpen(false)}/>
        </footer>
    );
});

Footer.displayName = 'Footer';



interface FooterRow {
    text: string;
    to?: RoutePaths;
}

export interface IFooterColumn {
    title: string;
    content: Array<FooterRow>
}

const initialFooterConfig: Array<IFooterColumn> = [
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
                to: RoutePaths.BLOG,
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