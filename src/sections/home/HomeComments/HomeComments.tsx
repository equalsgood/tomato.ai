import { useEffect, useState } from 'react';
import cls from './HomeComments.module.css';
import Dot from 'shared/assets/icons/dot-unactive.svg';
import ActiveDot from 'shared/assets/icons/dot-active.svg';
import FirstCommentatorImage from 'shared/assets/images/commentator-1.png';
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
                                company={comment.company}
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
    company: string;
    text: string;
}

const comments: Array<PublicComment> = [
    {
        picture: FirstCommentatorImage,
        name: 'Marta Jonas 1',
        position: 'CEO Caramelland',
        company: 'Caramelland.io',
        text: '“Tomato.ai is an impressive AI technology that effortlessly cleans up voice audio. Its advanced algorithms can quickly identify and remove background noise, leaving behind crystal-clear audio that\'s a pleasure to listen to.”'
    },
    {
        picture: FirstCommentatorImage,
        name: 'Marta Jonas 2',
        position: 'CEO Caramelland',
        company: 'Caramelland.io',
        text: '“Tomato.ai is an impressive AI technology that effortlessly cleans up voice audio. Its advanced algorithms can quickly identify and remove background noise, leaving behind crystal-clear audio that\'s a pleasure to listen to.”'
    },
    {
        picture: FirstCommentatorImage,
        name: 'Marta Jonas 3',
        position: 'CEO Caramelland',
        company: 'Caramelland.io',
        text: '“Tomato.ai is an impressive AI technology that effortlessly cleans up voice audio. Its advanced algorithms can quickly identify and remove background noise, leaving behind crystal-clear audio that\'s a pleasure to listen to.”'
    },
    {
        picture: FirstCommentatorImage,
        name: 'Marta Jonas 4',
        position: 'CEO Caramelland',
        company: 'Caramelland.io',
        text: '“Tomato.ai is an impressive AI technology that effortlessly cleans up voice audio. Its advanced algorithms can quickly identify and remove background noise, leaving behind crystal-clear audio that\'s a pleasure to listen to.”'
    },
];