import cls from './FeaturedCompanies.module.css';
import OctaveLogo from 'shared/assets/logos/featured/octave.svg';
import PointLogo from 'shared/assets/logos/featured/point.svg';
import TribeLogo from 'shared/assets/logos/featured/tribe.svg';
import CardumenLogo from 'shared/assets/logos/featured/cardumen.svg';
import RecursiveLogo from 'shared/assets/logos/featured/recursive.svg';

export const FeaturedCompanies = () => {
    return (
        <section className={cls.featured}>
            <OctaveLogo/>
            <PointLogo/>
            <TribeLogo/>
            <CardumenLogo/>
            <RecursiveLogo/>
        </section>
    );
};