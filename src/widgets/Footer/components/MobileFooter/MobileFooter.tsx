import cls from '../../Footer.module.css';
import { Link } from 'react-router-dom';
import { RoutePaths } from 'app/providers/AppRouter';
import FooterLogo from 'shared/assets/logos/footer-logo.svg';
import { NavigationLink, NavigationLinkVariants, SocialLinks, Text, TextVariants } from 'shared/components';
import { FooterColumn } from '../FooterColumn/FooterColumn';
import { Fragment, useState } from 'react';
import LocationIcon from 'shared/assets/icons/location-icon.svg';
import { ContactUsPopup } from 'widgets';
import { IFooterColumn } from '../../Footer';

interface MobileFooterProps {
    config: Array<IFooterColumn>
}

export const MobileFooter = (props: MobileFooterProps) => {
    const { config } = props;
    const [open, setOpen] = useState<boolean>(false);

    return (
        <footer className={cls.footer}>
            <div className={cls.content}>
                <Link className={cls.logo} to={RoutePaths.HOME}>
                    <FooterLogo/>
                </Link>
                {config.map((column, index) =>
                    <Fragment key={`${column.title}-footer-column`}>
                        { index === 0 &&
                            <FooterColumn classNamesProps={cls.useCases}  title={column.title}>
                                <div className={cls.useCasesContent}>
                                    <div className={cls.footerLinks}>
                                        <Text tag='h4' classNamesProps={cls.subheader} variant={TextVariants.SUBHEADER_LIGHT_SMALL}>
                                            BPOs
                                        </Text>
                                        <NavigationLink classNamesProps={cls.link} text="Overview" to={RoutePaths.BPO} variant={NavigationLinkVariants.FOOTER} />
                                        <NavigationLink classNamesProps={cls.link} text="ROI Calculator" to={RoutePaths.BPO_CALCULATOR} variant={NavigationLinkVariants.FOOTER} />
                                    </div>
                                    <div className={cls.footerLinks}>
                                        <Text tag='h4' classNamesProps={cls.subheader} variant={TextVariants.SUBHEADER_LIGHT_SMALL}>
                                            Enterprises
                                        </Text>
                                        <NavigationLink classNamesProps={cls.link} text="Overview" to={RoutePaths.ENTERPRISE} variant={NavigationLinkVariants.FOOTER} />
                                        <NavigationLink classNamesProps={cls.link} text="ROI Calculator" to={RoutePaths.ENTERPRISE_CALCULATOR} variant={NavigationLinkVariants.FOOTER} />
                                    </div>
                                </div>
                            </FooterColumn>
                        }
                        { index !== 0 &&
                            <FooterColumn classNamesProps={index === 1 ? cls.company : cls.privacy} title={column.title}>
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
                        }
                    </Fragment>
                )}
                <FooterColumn classNamesProps={cls.contact} title="Contact">
                    <div className={cls.footerLinks}>
                        <button onClick={() => setOpen(true)} className={cls.mailLink}>Contact us</button>
                        <div className={cls.footerLocation}>
                            <LocationIcon/>
                            <Text tag="p" classNamesProps={cls.link} variant={TextVariants.DEFAULT_SMALL}>Danville, CA 94526</Text>
                        </div>
                    </div>
                </FooterColumn>
                <div className={cls.rightsContainer}>
                    <SocialLinks/>
                    <Text tag='p' classNamesProps={cls.rights} variant={TextVariants.DEFAULT}>
                        ©2023 Tomato.ai. All rights reserved.
                    </Text>
                </div>
            </div>
            <ContactUsPopup open={open} onClose={() => setOpen(false)}/>
        </footer>
    );
};