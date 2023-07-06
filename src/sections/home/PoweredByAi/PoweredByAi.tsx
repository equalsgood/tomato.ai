import cls from './PoweredByAi.module.css';
import poweredImage from 'shared/assets/images/powered-by-ai.png';

export const PoweredByAi = () => {
    return (
        <section className={cls.powered}>
            <img alt="powered by ai image" className={cls.image} src={poweredImage} />
        </section>
    );
};