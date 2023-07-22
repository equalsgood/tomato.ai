import cls from './FeaturedCompanies.module.css';
import LogosMobile from 'shared/assets/logos/featured/mobile.png';
import LogosLightMobile from 'shared/assets/logos/featured/mobile-light.png';
import LogosTitledMobile from 'shared/assets/logos/featured/mobile-titled.png';
import InvestorsLogos from 'shared/assets/logos/featured/investors.png';
import InvestorsLightLogos from 'shared/assets/logos/featured/investors-light.png';
import InvestorsTitledLogos from 'shared/assets/logos/featured/investors-titled.png';


import classNames from 'classnames';
import { Text, TextVariants } from 'shared/components';
import { useContext } from 'react';
import { Context } from 'app/providers/ContextProvider';

export enum FeaturedCompaniesVariants {
    DEFAULT = 'default',
    LIGHT = 'dark',
    TITLED = 'titled',
}

interface FeaturedCompaniesProps {
    variant: FeaturedCompaniesVariants,
    title?: string
}

export const FeaturedCompanies = ({ variant, title }: FeaturedCompaniesProps) => {
    const { isMobile } = useContext(Context);

    return (
        <section className={classNames(cls.section, cls[variant])}>
            <span>Supported by leading investors</span>
            { variant === FeaturedCompaniesVariants.DEFAULT &&
                <>
                    {isMobile ? <img alt="investors companies logos" src={LogosMobile} /> : <img alt="investors companies logos" src={InvestorsLogos} />}
                </>
            }
            { variant === FeaturedCompaniesVariants.LIGHT &&
                <>
                    {isMobile ? <img alt="investors companies logos" src={LogosLightMobile} /> : <img alt="investors companies logos" src={InvestorsLightLogos} />}
                </>
            }
            { variant === FeaturedCompaniesVariants.TITLED &&
                <>
                    {isMobile ? <img alt="investors companies logos" src={LogosTitledMobile} /> : <img alt="investors companies logos" src={InvestorsTitledLogos} />}
                </>
            }
        </section>

    );
};
