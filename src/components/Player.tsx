import { useEffect, useRef, useState } from "react";
import { usePlayStore } from "../store/globalStore";
import type { Song } from "../interfaces/song";
import { Slider } from "./ui/Slider";
import { cn } from "../lib/utils";
import styles from "./player.module.css";
import { time } from "../lib/time";

export const Player = ({ url }: { url: string }) => {
  const refAudio = useRef<HTMLAudioElement>(null);
  let audioRef = refAudio.current;

  const { isPlay, songPath, songTime, volume, songId } = usePlayStore(
    (state) => state.currentPlay
  );
  const setSongTime = usePlayStore((state) => state.setSongTime);
  const setIsPlay = usePlayStore((state) => state.setIsPlay);
  const setSongPath = usePlayStore((state) => state.setSongPath);
  const setVolume = usePlayStore((state) => state.setVolume);

  const [song, setSong] = useState<Song>();

  useEffect(() => {
    audioRef = refAudio.current;

    if (isPlay) setIsPlay(false);
    if (volume) audioRef!.volume = volume;
    if (songPath) audioRef!.src = songPath;
    if (songTime) audioRef!.currentTime = songTime;
  }, []);

  useEffect(() => {
    if (isPlay) {
      audioRef!.src = songPath;
      audioRef!.currentTime = songTime;
      audioRef?.play();
    } else {
      setSongPath(audioRef?.src || "");
      setSongTime(audioRef?.currentTime || 0);
      audioRef?.pause();
    }

    audioRef?.addEventListener("timeupdate", (e) => {
      const target = e.target as HTMLAudioElement;
      if (target.currentTime === target.duration) setIsPlay(false);
      setSongTime(target.currentTime);
    });

    audioRef?.removeEventListener("timeupdate", () => {});
  }, [isPlay]);

  useEffect(() => {
    fetch(`${url}/api/song/${songId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setSong(data));

    if (isPlay) {
      audioRef!.src = songPath;
      audioRef!.currentTime = songTime;
      audioRef?.play();
    } else {
      setSongTime(audioRef?.currentTime || 0);
      audioRef?.pause();
    }
  }, [songPath]);

  const handlerPlay = () => {
    if (isPlay) {
      setIsPlay(false);
    } else {
      if (songPath) {
        audioRef!.src = songPath;
        audioRef!.currentTime = songTime;
        setIsPlay(true);
        return;
      }
    }
  };

  const handlerSongTime = (time: number[]) => {
    setSongTime(time[0]);
    audioRef!.currentTime = time[0];
  };

  const handlerSongVolume = (value: number[]) => {
    const v = value[0] / 100;
    setVolume(v);
    audioRef!.volume = v;
  };

  return (
    <div className={cn("w-full h-full pt-2 items-center", styles.contenido)}>
      {song ? (
        <div className="flex justify-center items-center gap-3 justify-self-start">
          <picture>
            <img
              src={song.album.cover}
              alt="album image"
              className="w-14 h-14 rounded-lg shadow-xl shadow-neutral-900"
            />
          </picture>
          <div>
            <p className="text-sm font-circular-medium">{song.name}</p>
            <p className="text-xs font-circular-light text-neutral-400">
              {song.artist.name}
            </p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex flex-col gap-2 justify-center items-center">
        <button
          onClick={handlerPlay}
          className={`right-2 z-10 w-[40px] h-[40px]
            flex justify-center items-center bg-white rounded-full shadow-lg`}
        >
          {isPlay ? (
            <svg
              fill="currentColor"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="w-[25px] h-[25px] text-black"
            >
              <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
            </svg>
          ) : (
            <svg
              fill="currentColor"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="w-[25px] h-[25px] text-black"
            >
              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
            </svg>
          )}
        </button>
        <div className="flex justify-center items-center gap-x-2">
          <span className="text-xs w-5">{time(songTime)}</span>
          <Slider
            onValueChange={(time) => handlerSongTime(time)}
            value={[songTime]}
            defaultValue={[audioRef?.currentTime || 0]}
            max={audioRef?.duration}
            step={1}
            className="w-[200px] sm:w-[250px] lg:w-[400px]"
          />
          <span className="text-xs w-5">{time(audioRef?.duration || 0)}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-self-end">
        <svg
          fill="currentColor"
          role="presentation"
          aria-label="Volume high"
          aria-hidden="true"
          id="volume-icon"
          viewBox="0 0 16 16"
          className="w-6 h-6 text-white"
        >
          <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
          <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
        </svg>
        <Slider
          onValueChange={(volume) => handlerSongVolume(volume)}
          defaultValue={[volume * 100]}
          max={100}
          step={1}
          className="w-[80px] sm:w-[100px] lg:w-[120px]"
        />
      </div>
      <audio ref={refAudio} />
    </div>
  );
};
