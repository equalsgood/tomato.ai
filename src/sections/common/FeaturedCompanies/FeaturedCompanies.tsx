import cls from './FeaturedCompanies.module.css';
import OctaveLogo from 'shared/assets/logos/featured/octave.png';
import PointLogo from 'shared/assets/logos/featured/point.png';
import TribeLogo from 'shared/assets/logos/featured/tribe.png';
import CardumenLogo from 'shared/assets/logos/featured/cardumen.png';
import LogosMobile from 'shared/assets/logos/featured/mobile.png';
import RecursiveLogo from 'shared/assets/logos/featured/recursive.png';
import OctaveLightLogo from 'shared/assets/logos/featured/octave-light.png';
import PointLightLogo from 'shared/assets/logos/featured/point-light.png';
import TribeLightLogo from 'shared/assets/logos/featured/tribe-light.png';
import CardumenLightLogo from 'shared/assets/logos/featured/cardumen-light.png';
import RecursiveLightLogo from 'shared/assets/logos/featured/recursive-light.png';
import OctaveTitledLogo from 'shared/assets/logos/featured/octave-titled.png';
import PointTitledLogo from 'shared/assets/logos/featured/point-titled.png';
import TribeTitledLogo from 'shared/assets/logos/featured/tribe-titled.png';
import CardumenTitledLogo from 'shared/assets/logos/featured/cardumen-titled.png';
import RecursiveTitledLogo from 'shared/assets/logos/featured/recursive-titled.png';
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

    if(isMobile) {
        return (
            <section>
                {variant === FeaturedCompaniesVariants.DEFAULT &&
                    <img className={cls.image} alt={'image of the featured companies'} src={LogosMobile}/>
                }
            </section>
        );
    }

    return (
        <section className={classNames(cls.featured, { [cls.titled]: variant === FeaturedCompaniesVariants.TITLED })}>
            <div className={classNames(cls.content, { [cls.titled]: variant === FeaturedCompaniesVariants.TITLED })}>
                { variant === FeaturedCompaniesVariants.DEFAULT &&
                <>
                    <img alt="logo of the company Octave" className={cls.image} src={OctaveLogo} />
                    <img alt="logo of the company Point" className={cls.image} src={PointLogo} />
                    <img alt="logo of the company Point" className={cls.image} src={TribeLogo} />
                    <img alt="logo of the company Cardumen" className={cls.image} src={CardumenLogo} />
                    <img alt="logo of the company Cardumen" className={cls.image} src={RecursiveLogo} />
                </>
                }
                { variant === FeaturedCompaniesVariants.LIGHT &&
                <>
                    <img alt="logo of the company Octave" className={cls.image} src={OctaveLightLogo} />
                    <img alt="logo of the company Point" className={cls.image} src={PointLightLogo} />
                    <img alt="logo of the company Point" className={cls.image} src={TribeLightLogo} />
                    <img alt="logo of the company Cardumen" className={cls.image} src={CardumenLightLogo} />
                    <img alt="logo of the company Cardumen" className={cls.image} src={RecursiveLightLogo} />
                </>
                }
                { variant === FeaturedCompaniesVariants.TITLED &&
                <>
                    <Text tag="h3" variant={TextVariants.TITLE_EXTRA_SMALL_REVERSED} classNamesProps={cls.title}>{title}</Text>
                    <div className={cls.logos}>
                        <img alt="logo of the company Octave" className={cls.image} src={OctaveTitledLogo} />
                        <img alt="logo of the company Point" className={cls.image} src={PointTitledLogo} />
                        <img alt="logo of the company Point" className={cls.image} src={TribeTitledLogo} />
                        <img alt="logo of the company Cardumen" className={cls.image} src={CardumenTitledLogo} />
                        <img alt="logo of the company Cardumen" className={cls.image} src={RecursiveTitledLogo} />
                    </div>
                </>
                }
            </div>
        </section>
    );
};
