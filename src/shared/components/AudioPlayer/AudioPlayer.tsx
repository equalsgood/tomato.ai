import { memo, useContext, useEffect, useRef, useState } from 'react';
import cls from './AudioPlayer.module.css';
import classNames from 'classnames';
import PlayIconSmall from 'shared/assets/icons/player/play-small.svg';
import PlayIconLarge from 'shared/assets/icons/player/play-large.svg';
import PauseIconSmall from 'shared/assets/icons/player/pause-small.svg';
import PauseIconLarge from 'shared/assets/icons/player/pause-large.svg';
import { Context } from 'app/providers/ContextProvider';

type AudioButtonType = 'original' | 'enhanced';
type AudioButtonSize = 'large' | 'small';

interface AudioPlayerProps {
    src: string;
    type: AudioButtonType;
    size: AudioButtonSize;
    isPlayedProp?: boolean;
    onEnded?: () => void;
    audioId: string;
}

export const AudioPlayer = memo((props: AudioPlayerProps) => {
    const { src, type, size, isPlayedProp, onEnded, audioId } = props;
    const PlayIcon = size === 'small' ? PlayIconSmall : PlayIconLarge;
    const PauseIcon = size === 'small' ? PauseIconSmall : PauseIconLarge;

    const [isPlayed, setIsPlayed] = useState<boolean>(isPlayedProp || false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const classes = classNames(cls.playButton, cls[type], cls[size]);

    const { playedAudio, onPlay } = useContext(Context);

    const toggleAudio = () => {
        if(isPlayedProp === undefined) {
            if(isPlayed) {
                audioRef.current?.pause();
            }
            else {
                onPlay(audioId);
                audioRef.current?.play().then();
            }

            setIsPlayed(prev => !prev);
        }
    };

    useEffect(() => {
        if(playedAudio !== audioId) {
            audioRef.current?.pause();
            setIsPlayed(false);
        }
    }, [playedAudio]);

    useEffect(() => {
        if(isPlayedProp !== undefined) {
            setIsPlayed(isPlayedProp);

            if(isPlayedProp)
                audioRef.current?.play().then();
            else
                audioRef.current?.pause();
        }
    }, [isPlayedProp]);

    const endedHandler = () => {
        setIsPlayed(false);

        if(onEnded !== undefined)
            onEnded();
    };

    return (
        <div>
            <button className={classes} onClick={toggleAudio}>
                <div className={cls.icon}>
                    {isPlayed ?
                        <div className={cls.pauseIcon}>
                            <PauseIcon/>
                        </div> :
                        <div className={cls.playIcon}>
                            <PlayIcon/>
                        </div>
                    }
                </div>
            </button>
            <audio
                onEnded={endedHandler}
                ref={audioRef}
                src={src}
            />
        </div>
    );
});
AudioPlayer.displayName = 'AudioPlayer';
