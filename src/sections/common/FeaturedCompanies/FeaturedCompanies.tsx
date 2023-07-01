import cls from './FeaturedCompanies.module.css';
import OctaveLogo from 'shared/assets/logos/featured/octave.svg';
import PointLogo from 'shared/assets/logos/featured/point.svg';
import TribeLogo from 'shared/assets/logos/featured/tribe.svg';
import CardumenLogo from 'shared/assets/logos/featured/cardumen.svg';
import RecursiveLogo from 'shared/assets/logos/featured/recursive.svg';
import OctaveLightLogo from 'shared/assets/logos/featured/octave-light.svg';
import PointLightLogo from 'shared/assets/logos/featured/point-light.svg';
import TribeLightLogo from 'shared/assets/logos/featured/tribe-light.svg';
import CardumenLightLogo from 'shared/assets/logos/featured/cardumen-light.svg';
import RecursiveLightLogo from 'shared/assets/logos/featured/recursive-light.svg';
import OctaveTitledLogo from 'shared/assets/logos/featured/octave-titled.svg';
import PointTitledLogo from 'shared/assets/logos/featured/point-titled.svg';
import TribeTitledLogo from 'shared/assets/logos/featured/tribe-titled.svg';
import CardumenTitledLogo from 'shared/assets/logos/featured/cardumen-titled.svg';
import RecursiveTitledLogo from 'shared/assets/logos/featured/recursive-titled.svg';
import classNames from 'classnames';
import { Text, TextVariants } from 'shared/components';

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
    return (
        <section className={classNames(cls.featured, { [cls.titled]: variant === FeaturedCompaniesVariants.TITLED })}>
            { variant === FeaturedCompaniesVariants.DEFAULT &&
                <>
                    <OctaveLogo/>
                    <PointLogo/>
                    <TribeLogo/>
                    <CardumenLogo/>
                    <RecursiveLogo/>
                </>
            }
            { variant === FeaturedCompaniesVariants.LIGHT &&
                <>
                    <OctaveLightLogo/>
                    <PointLightLogo/>
                    <TribeLightLogo/>
                    <CardumenLightLogo/>
                    <RecursiveLightLogo/>
                </>
            }
            { variant === FeaturedCompaniesVariants.TITLED &&
                <>
                    <Text tag="h3" variant={TextVariants.TITLE_EXTRA_SMALL_REVERSED} classNamesProps={cls.title}>{title}</Text>
                    <div className={cls.logos}>
                        <OctaveTitledLogo/>
                        <PointTitledLogo/>
                        <TribeTitledLogo/>
                        <CardumenTitledLogo/>
                        <RecursiveTitledLogo/>
                    </div>
                </>
            }
        </section>
    );
};