import cls from './PoweredByAi.module.css';
import poweredImage from 'shared/assets/images/powered-by-ai.png';
import poweredMobileImage from 'shared/assets/images/powered-by-ai-mobile.png';
import { useContext } from 'react';
import { Context } from 'app/providers/ContextProvider';

export const PoweredByAi = () => {
    const { isMobile } = useContext(Context);

    return (
        <section className={cls.powered}>
            {isMobile ?
                <img alt="powered by ai image" className={cls.image} src={poweredMobileImage} /> :
                <img alt="powered by ai image" className={cls.image} src={poweredImage} />
            }
        </section>
    );
};