import { memo, useEffect, useState } from 'react';
import cls from './HomeComments.module.css';
import Dot from 'shared/assets/icons/dot-unactive.svg';
import ActiveDot from 'shared/assets/icons/dot-active.svg';
import FirstCommentatorImage from 'shared/assets/images/commentator-1.png';
import { HomeComment } from './components/HomeComment/HomeComment';
import ArrowRight from 'shared/assets/icons/arrow-right.svg';
import ArrowLeft from 'shared/assets/icons/arrow-left.svg';
import classNames from 'classnames';

const COMMENT_WIDTH = 612;

export const HomeComments = memo(() => {
    const [currentComment, setCurrentComment] = useState<number>(0);
    const [showedComment, setShowedComment] = useState<number>(-1);

    useEffect(() => {
        const carouselSlider = document.querySelector<HTMLElement>('.comments-carousel-container');
        const list = document.querySelector<HTMLElement>('.comments-carousel');
        const list2 = document.querySelector<HTMLElement>('.copy-comments-carousel');

        if(!carouselSlider || !list || !list2)
            return;

        const width = list.offsetWidth;
        const windowWidth = window.innerWidth;
        let x = Math.round((windowWidth / 2)) - (currentComment * COMMENT_WIDTH) - 300;
        let startWidth = x + width;
        let x2 = startWidth;

        const childrenNumber = list.childElementCount;
        let currentMovingComment = currentComment;
        let pixelsOffset = 0;


        function moveFirst(movedX: number) {
            x = x + movedX;
            pixelsOffset = pixelsOffset + movedX;

            if(pixelsOffset < (0 - COMMENT_WIDTH)) {
                currentMovingComment++;
                pixelsOffset = pixelsOffset + COMMENT_WIDTH;
            } else if(pixelsOffset > COMMENT_WIDTH) {
                currentMovingComment--;
                pixelsOffset = pixelsOffset - COMMENT_WIDTH;
            }

            if(currentMovingComment >= childrenNumber) {
                currentMovingComment = 0;
            }

            if(currentMovingComment < 0) {
                currentMovingComment = childrenNumber - 1;
            }

            if(currentMovingComment !== showedComment) {
                setShowedComment(currentMovingComment);
            }

            if (width >= Math.abs(x)) {
                list!.style.left = `${x}px`;
            } else {
                x = width;
                startWidth = width;
            }
        }

        function moveSecond(movedX: number) {
            x2 = x2 + movedX;

            if(startWidth === width) {
                if (list2!.offsetWidth >= Math.abs(x2)) {
                list2!.style.left = `${x2}px`;
                } else {
                    x2 = width;
                }
            } else {
                if (startWidth >= Math.abs(x2)) {
                    list2!.style.left = `${x2}px`;
                } else {
                    x2 = width;
                }
            }

            if(x === 0 && Math.abs(x2) !== width) {
                if(x2 > 0)
                    x2 = width;
                else
                    x2 = 0 - width;
            }
        }

        let firstInterval = setInterval(() => moveFirst(-1), 10);
        let secondInterval = setInterval(() => moveSecond(-1), 10);
        let dragStartX = 0;

        function dragStartHandler (e: DragEvent) {
            const img = new Image();
            img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
            e.dataTransfer!.setDragImage(img, 0, 0);
        }

        function dragHandler (e: DragEvent) {
            if(!dragStartX)
                dragStartX = e.x;

            if(dragStartX && e.x && dragStartX !== e.x) {
                const range = e.x - dragStartX;

                moveFirst(range);
                moveSecond(range);

                dragStartX = e.x;
            }
        }

        function dragEndHandler (e: DragEvent) {
            dragStartX = 0;
        }

        function hover () {
            clearInterval(firstInterval);
            clearInterval(secondInterval);
        }

        function unhover () {
            firstInterval = setInterval(() => moveFirst(-1), 10);
            secondInterval = setInterval(() => moveSecond(-1), 10);
        }

        carouselSlider!.addEventListener('dragstart', dragStartHandler);
        carouselSlider!.addEventListener('drag', dragHandler);
        carouselSlider!.addEventListener('dragend', dragEndHandler);
        carouselSlider!.addEventListener('mouseover', hover);
        carouselSlider!.addEventListener('mouseleave', unhover);

        return () => {
            clearInterval(firstInterval);
            clearInterval(secondInterval);
            carouselSlider!.removeEventListener('dragstart', dragStartHandler);
            carouselSlider!.removeEventListener('drag', dragHandler);
            carouselSlider!.removeEventListener('dragend', dragEndHandler);
            carouselSlider!.removeEventListener('mouseover', hover);
            carouselSlider!.removeEventListener('mouseleave', unhover);
        };
    }, [currentComment]);

    const changeComment = (newCommentIndex: number) => {
        setShowedComment(newCommentIndex);
        setCurrentComment(newCommentIndex);
    };

    return (
        <section className={cls.commentsSection}>
            <div draggable className={classNames(cls.carouselContainer, 'comments-carousel-container')}>
                {/*<ul style={{ transform: commentsOffset }} className={cls.commentsList}>*/}
                <ul className={classNames(cls.carousel, 'comments-carousel')}>
                    {comments.map((comment, index) =>
                        <HomeComment
                            classNamesProps="carousel__item"
                            active={index === currentComment}
                            key={`comment-${index}`}
                            picture={comment.picture}
                            name={comment.name}
                            position={comment.position}
                            company={comment.company}
                            text={comment.text}
                        />
                    )}
                </ul>
                <ul className={classNames(cls.carousel, 'copy-comments-carousel')}>
                    {comments.map((comment, index) =>
                        <HomeComment
                            classNamesProps="carousel__item"
                            active={index === currentComment}
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
            <div className={cls.pagination}>
                {comments.map((_, index) =>
                    <div className={cls.dot} onClick={() => changeComment(index)} key={`${index}-dot`}>
                        {index === showedComment ?
                            <ActiveDot/> :
                            <Dot/>
                        }
                    </div>
                )}
            </div>
        </section>
    );
});

HomeComments.displayName = 'HomeComments';

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