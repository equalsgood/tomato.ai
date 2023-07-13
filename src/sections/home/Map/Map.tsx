import cls from './Map.module.css';
import mapImage from 'shared/assets/images/map.png';
import mapMobileImage from 'shared/assets/images/map-mobile.png';
import { useContext } from 'react';
import { Context } from 'app/providers/ContextProvider';
import { Text, TextVariants } from 'shared/components';

export const Map = () => {
    const { isMobile } = useContext(Context);

    return (
        <section className={cls.map}>
            {
                isMobile ?
                    <>
                        <img className={cls.image} alt="image of the map" src={mapMobileImage} />
                        <Text tag="h2" classNamesProps={cls.title} variant={TextVariants.TITLE}>Close the offshore gap</Text>
                        <Text tag="p" classNamesProps={cls.paragraph} variant={TextVariants.PARAGRAPH_DARK}>Go far and wide offshoring while preserving a more native speaking style for agents.</Text>
                    </> :
                    <img className={cls.image} alt="image of the map" src={mapImage} />
            }
        </section>
    );
};