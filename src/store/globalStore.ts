import {create} from "zustand";
import { persist } from "zustand/middleware";

interface PlayState {
  currentPlay: {
    isPlay: boolean;
    songId: number;
    albumId: number;
    songPath: string;
    songTime: number;
    volume: number;
  },
  setIsPlay: (value: boolean) => void;
  setSongPath: (path: string) => void;
  setSongTime: (time: number) => void;
  setAlbumId: (id: number) => void;
  setSongId: (id: number) => void;
  setVolume: (value: number) => void;
}

export const usePlayStore = create<PlayState>()(
  persist((set) => ({
    currentPlay: {
      isPlay: false,
      songId: 0,
      albumId: 0,
      songPath: "",
      songTime: 0,
      volume: 0.5,
    },
    setIsPlay: (value) => set((state) => ({currentPlay: {...state.currentPlay, isPlay: value}})),
    setSongPath: (path) => set((state) => ({currentPlay: {...state.currentPlay, songPath: path}})),
    setSongTime: (time) => set((state) => ({currentPlay: {...state.currentPlay, songTime: time}})),
    setAlbumId: (id) => set((state) => ({currentPlay: {...state.currentPlay, albumId: id}})),
    setSongId: (id) => set((state) => ({currentPlay: {...state.currentPlay, songId: id}})),
    setVolume: (value) => set((state) => ({currentPlay: {...state.currentPlay, volume: value}})),
  }), {name: "play-storage"}
));