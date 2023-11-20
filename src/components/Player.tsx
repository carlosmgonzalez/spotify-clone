import { useEffect, useRef } from "react";
import { useGlobalStore, usePlayStore } from "../store/globalStore";

export const Player = () => {

  const audioRef = useRef<HTMLAudioElement>(null);

  const {isPlay, songPath, songTime} = usePlayStore(state => state.currentPlay);
  const setSongTime = usePlayStore(state => state.setSongTime);
  const setIsPlay = usePlayStore(state => state.setIsPlay);

  useEffect(() => {
    if (isPlay) {
      audioRef.current!.currentTime = songTime;
      audioRef.current?.play();
    } else {
      setSongTime(audioRef.current!.currentTime);
      audioRef.current?.pause();
    }
  }, [isPlay]);
  
  useEffect(() => {
    if (isPlay) {
      audioRef.current!.src = songPath;
      audioRef.current!.currentTime = songTime;
      audioRef.current?.play();
    } else {
      setSongTime(audioRef.current!.currentTime);
      audioRef.current?.pause();
    }
  }, [songPath]);

  const handlerPlay = () => {
    if (isPlay) {
      setIsPlay(false);
    } else {
      setIsPlay(true);
    }
  };

  return (
    <div className="w-full h-full flex justify-between items-center">
      <div>
        <p>Portada</p>
      </div>
      <div>
        <button
          onClick={handlerPlay}
          className={`right-2 z-10 w-[40px] h-[40px]
            flex justify-center items-center bg-white rounded-full shadow-lg`}
        >
          {
            isPlay
            ? (
              <svg
                fill="currentColor"
                role="img"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="w-[25px] h-[25px] text-black"
              >
                <path
                  d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"
                ></path>
              </svg>
            ) : (
              <svg
                fill="currentColor"
                role="img"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="w-[25px] h-[25px] text-black"
              >
                <path
                  d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"
                ></path>
              </svg>
            )
          }
        </button>
      </div>
      <div>
        <p>volumen</p>
      </div>
      <audio ref={audioRef}/>
    </div>
  )
}
