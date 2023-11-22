import { usePlayStore } from '../../store/globalStore';
import type {Song} from '../../interfaces/album';

export const ButtonPlayList = ({songs, albumId}: {songs: Song[], albumId: number}) => {

  const {isPlay, songPath, songTime, songId, albumId: albumIdGlobal} = usePlayStore(state => state.currentPlay);
  const setSongPath = usePlayStore(state => state.setSongPath);
  const setIsPlay = usePlayStore(state => state.setIsPlay);
  const setAlbumId = usePlayStore(state => state.setAlbumId);
  const setSongTime = usePlayStore(state => state.setSongTime);
  const setSongId = usePlayStore(state => state.setSongId);

  const handlePlay = () => {
    if (isPlay) {
      if (albumId !== albumIdGlobal) {
        setAlbumId(albumId);
        setSongPath(songs[0].path);
        setSongId(songs[0].id);
        setSongTime(0);
        return;
      }
      setIsPlay(false);
    } else {
      if (songId && albumId === albumIdGlobal) {
        const song = songs.find(song => song.id === songId);
        setAlbumId(albumId);
        setSongPath(song!.path)
        setIsPlay(true);
        return;
      }
      setAlbumId(albumId);
      setSongPath(songs[0].path)
      setSongId(songs[0].id);
      setSongTime(0);
      setIsPlay(true);
    }
  };

  return (
    <button
      onClick={handlePlay}
      className={`right-[30px] bottom-5 z-20 w-[55px] h-[55px]
        flex justify-center items-center bg-green-500 rounded-full shadow-lg`}
    >
      {
        isPlay && (albumId === albumIdGlobal)
        ? (
          <svg
            fill="currentColor"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="w-[30px] h-[30px] text-black"
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
            className="w-[30px] h-[30px] text-black"
            ><path
              d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"
            ></path>
          </svg>
        )
      }
    </button>
  );
};
