import {create} from "zustand";


interface PlayState {
  currentPlay: {
    isPlay: boolean;
    songId: string | null;
    albumId: string;
    songPath: string;
    songTime: number;
  },
  setIsPlay: (value: boolean) => void;
  setSongPath: (path: string) => void;
  setSongTime: (time: number) => void;
  setAlbumId: (id: string) => void;
  setSongId: (id: string) => void;
}

export const usePlayStore = create<PlayState>()((set) => ({
    currentPlay: {
      isPlay: false,
      songId: null,
      albumId: "0",
      songPath: "",
      songTime: 0
    },
    setIsPlay: (value) => set((state) => ({currentPlay: {...state.currentPlay, isPlay: value}})),
    setSongPath: (path) => set((state) => ({currentPlay: {...state.currentPlay, songPath: path}})),
    setSongTime: (time) => set((state) => ({currentPlay: {...state.currentPlay, songTime: time}})),
    setAlbumId: (id) => set((state) => ({currentPlay: {...state.currentPlay, albumId: id}})),
    setSongId: (id) => set((state) => ({currentPlay: {...state.currentPlay, songId: id}})),
}));


interface GlobalState {
  isPlay: boolean;
  setIsPlay: () => void;
  currentSong: string;
  setCurrentSong: (song: string) => void;
  currentTime: number;
  setCurrentTime: (time: number) => void;
};

export const useGlobalStore = create<GlobalState>()((set) => ({
  isPlay: false,
  setIsPlay: () => set((state) => ({isPlay: !state.isPlay})),
  currentSong: "",
  setCurrentSong: (song) => set(() => ({currentSong: song})),
  currentTime: 0,
  setCurrentTime: (time) => set(() => ({currentTime: time}))
}))