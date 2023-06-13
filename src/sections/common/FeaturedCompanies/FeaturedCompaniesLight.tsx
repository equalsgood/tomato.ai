import cls from './FeaturedCompanies.module.css';
import OctaveLogo from 'shared/assets/logos/featured/octave-light.svg';
import PointLogo from 'shared/assets/logos/featured/point-light.svg';
import TribeLogo from 'shared/assets/logos/featured/tribe-light.svg';
import CardumenLogo from 'shared/assets/logos/featured/cardumen-light.svg';
import RecursiveLogo from 'shared/assets/logos/featured/recursive-light.svg';

export const FeaturedCompaniesLight = () => {
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