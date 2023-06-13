import cls from './Map.module.css';
import mapImage from 'shared/assets/images/map.png';

export const Map = () => {
    return (
        <section className={cls.map}>
            <img alt="image of the map" src={mapImage} />
        </section>
    );
};