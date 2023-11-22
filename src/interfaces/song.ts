export interface Song {
  id:        number;
  name:      string;
  album_id:  number;
  artist_id: number;
  path:      string;
  cover:     null;
  album:     Album;
  artist:    Artist;
}

export interface Album {
  id:        number;
  name:      string;
  artist_id: number;
  cover:     string;
}

export interface Artist {
  id:   number;
  name: string;
  img:  string;
}