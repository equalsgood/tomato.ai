import cls from './AboutFounders.module.css';
import { Text, TextVariants } from 'shared/components';
import oferPicture from 'shared/assets/images/founders/ofer.png';
import jamesPicture from 'shared/assets/images/founders/james.png';
import yePicture from 'shared/assets/images/founders/ye.png';
import { AboutFounder } from 'sections/about/AboutFounders/components/AboutFounder';

export const AboutFounders = () => {
    return (
        <section className={cls.aboutFounders}>
            <div className={cls.titleContainer}>
                <Text tag="h2" variant={TextVariants.TITLE_MEDIUM} classNamesProps={cls.title}>Meet the Founders</Text>
                <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.paragraph}>The founders, Ofer, James and Ye, spent years at Google leading teams building contact center AI solutions. They teamed up to create Tomato.ai, which provides higher voice clarity on calls with offshore agents.</Text>
            </div>
            <ul className={cls.founders}>
                {founders.map(founder =>
                    <AboutFounder
                        key={`${founder.name}-founder`}
                        imageSrc={founder.imageSrc}
                        name={founder.name}
                        position={founder.position}
                        biography={founder.biography}
                        link={founder.link}
                    />
                )}
            </ul>
        </section>
    );
};

export interface Founder {
    imageSrc: string,
    name: string,
    position: string,
    biography: string,
    link: string
}

const founders: Array<Founder> = [
    {
        imageSrc: oferPicture,
        name: 'Ofer Ronen',
        position: 'CEO',
        biography: 'Ofer previously sold three tech startups, two to Google, and one to IAC.  He spent the past five years at Google building contact center AI solutions within the Area 120 incubator.  He closed over $500M in deals for these new solutions.  He holds an MS in Computer Engineering with a focus on AI from the University of Michigan, and an MBA from Cornell.',
        link: 'https://www.linkedin.com/in/oferronen/'
    },
    {
        imageSrc: jamesPicture,
        name: 'James Fan',
        position: 'CTO',
        biography: 'James previously sold a contact center startup. He then spent the past four years leading the speech engineering team at Google Cloud. Before that he was a leading researcher on the IBM Watson Question & Answering system, which successfully beat Ken Jennings at Jeopardy! James holds a PhD in computer science from the University of Texas in Austin.',
        link: 'https://www.linkedin.com/in/jamesfan1/'
    },
    {
        imageSrc: yePicture,
        name: 'Ye Jia',
        position: 'Chief Scientist',
        biography: 'Ye previously was a senior researcher at Google Brain, leading work on speech synthesis and translation. He invented the first human parity text-to-speech synthesis model and the first direct speech-to-speech translation model. Before that, he led engineering teams at Google Search. Ye holds BS degrees in Physics & Math from Peking University.',
        link: 'https://www.linkedin.com/in/jiaye/'
    },
];