import { useEffect, useState } from 'react';
import cls from './HomeComments.module.css';
import Dot from 'shared/assets/icons/dot-unactive.svg';
import ActiveDot from 'shared/assets/icons/dot-active.svg';
import FirstCommentatorImage from 'shared/assets/images/commentator-1.jpg';
import SecondCommentatorImage from 'shared/assets/images/commentator-2.jpg';
import ThirdCommentatorImage from 'shared/assets/images/commentator-3.png';
import FourthCommentatorImage from 'shared/assets/images/commentator-4.jpg';
import CedarLogo from 'shared/assets/logos/cedar-logo.jpg';
import InfoperformanceLogo from 'shared/assets/logos/infoperformance-logo.jpg';
import MondeeLogo from 'shared/assets/logos/mondee-logo.png';
import SuperLogo from 'shared/assets/logos/super-logo.png';
import { HomeComment } from './components/HomeComment/HomeComment';
import ArrowRight from 'shared/assets/icons/arrow-right.svg';
import ArrowLeft from 'shared/assets/icons/arrow-left.svg';

const COMMENT_WIDTH = 612;

export const HomeComments = () => {
    const [currentComment, setCurrentComment] = useState<number>(1);

    const [commentsOffset, setCommentsOffset] = useState(`translate(calc(-306px - ${COMMENT_WIDTH * currentComment}px), -50%)`);

    useEffect(() => {
        setCommentsOffset(`translate(calc(-306px - ${COMMENT_WIDTH * currentComment}px), -50%)`);
    }, [currentComment]);

    const changeComment = (newCommentIndex: number) => {
        const maxIndex = comments.length - 1;

        if(newCommentIndex > maxIndex)
            setCurrentComment(0);
        else if(newCommentIndex < 0)
            setCurrentComment(maxIndex);
        else
            setCurrentComment(newCommentIndex);
    };

    return (
        <section className={cls.section}>
            <div className={cls.commentsSection}>
                <button onClick={() => changeComment(currentComment - 1)}>
                    <ArrowLeft/>
                </button>
                {/*<ul style={{ transform: commentsOffset }} className={cls.commentsList}>*/}
                <div className={cls.commentsWrapper}>
                    <ul style={{ transform: commentsOffset }} className={cls.commentsList}>
                        {comments.map((comment, index) =>
                            <HomeComment
                                key={`comment-${index}`}
                                picture={comment.picture}
                                name={comment.name}
                                position={comment.position}
                                companyImage={comment.companyImage}
                                text={comment.text}
                            />
                        )}
                    </ul>
                </div>
                <button onClick={() => changeComment(currentComment + 1)}>
                    <ArrowRight/>
                </button>
            </div>
            <div className={cls.pagination}>
                {comments.map((_, index) =>
                    <div key={`${index}-dot`} className={cls.dot} onClick={() => changeComment(index)}>
                        {index === currentComment ?
                            <ActiveDot/> :
                            <Dot/>
                        }
                    </div>
                )}
            </div>
        </section>
    );
};

export interface PublicComment {
    picture: string;
    name: string;
    position: string;
    companyImage: string;
    text: string;
}

const comments: Array<PublicComment> = [
    {
        picture: ThirdCommentatorImage,
        name: 'Michael Thomas',
        position: 'President, Retail',
        companyImage: MondeeLogo,
        text: '“Excited to have Tomato.ai reduce our offshore agent costs by overcoming Mother Tongue Language (MTL) limitations, and massively growing the pool of candidates we can hire.”'
    },
    {
        picture: FirstCommentatorImage,
        name: 'Clem Bason',
        position: 'GM, Travel',
        companyImage: SuperLogo,
        text: '“We are excited to deploy Tomato.ai in the Philippines, as it will significantly improve intelligibility resulting in higher customer satisfaction, reduced cost, and better sales conversion.”',
    },
    {
        picture: FourthCommentatorImage,
        name: 'Amir Erez',
        position: 'CEO',
        companyImage: CedarLogo,
        text: '“At Cedar we have offshore agents calling US customers to collect on late bills. The benefit of the Tomato.ai accent softening is it is sure to increase trust when agents call, plus improve close rates and revenues.”'
    },
    {
        picture: SecondCommentatorImage,
        name: 'Matt Guarneri',
        position: 'CEO',
        companyImage: InfoperformanceLogo,
        text: '“The accent softening from Tomato.ai is phenomenal. It makes an offshore call center like ours much more attractive to new accounts considering offshoring.”',
    }
];