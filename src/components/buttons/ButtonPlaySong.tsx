import { usePlayStore } from '../../store/globalStore';
import type {Song} from "../../interfaces/album"

export const ButtonPlaySong = ({song, albumId}: {song: Song, albumId: number}) => {

  const {isPlay, songPath, songTime, songId, albumId: albumIdGlobal} = usePlayStore(state => state.currentPlay);
  const setSongPath = usePlayStore(state => state.setSongPath);
  const setIsPlay = usePlayStore(state => state.setIsPlay);
  const setAlbumId = usePlayStore(state => state.setAlbumId);
  const setSongTime = usePlayStore(state => state.setSongTime);
  const setSongId = usePlayStore(state => state.setSongId);

  const handlePlay = () => {
    if (isPlay) {
      if (songId !== song.id) {
        setAlbumId(albumId);
        setSongId(song.id);
        setSongPath(song.path);
        setSongTime(0);
        return;
      }
      setIsPlay(false);
    } else {
      if (songId === song.id) {
        setIsPlay(true);
        return
      };
      setAlbumId(albumId);
      setSongId(song.id);
      setSongTime(0);
      setSongPath(song.path)
      setIsPlay(true);
    }
  };

  return (
    <button
      onClick={handlePlay}
      className={`buttonPlaySong hidden mr-1 shadow-lg`}
    >
      {
        isPlay && ( songId === song.id)
        ? (
          <svg
            fill="currentColor"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="w-[20px] h-[20px] text-white"
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
            className="w-[20px] h-[20px] text-white"
            ><path
              d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"
            ></path>
          </svg>
        )
      }
    </button>
  );
};
