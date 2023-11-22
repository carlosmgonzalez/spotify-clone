export interface Album {
  id:        number;
  name:      string;
  artist_id: number;
  cover:     string;
  artist:    Artist;
  song:      Song[];
}

export interface Artist {
  id:   number;
  name: string;
  img:  string;
}

export interface Song {
  id:        number;
  name:      string;
  album_id:  number;
  artist_id: number;
  path:      string;
  cover:     null;
}