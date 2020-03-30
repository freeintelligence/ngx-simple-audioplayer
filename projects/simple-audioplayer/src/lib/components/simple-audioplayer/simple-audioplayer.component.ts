import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Song } from '../../interfaces/song.interface';

@Component({
  selector: 'simple-audioplayer',
  templateUrl: './simple-audioplayer.component.html',
  styleUrls: ['./simple-audioplayer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SimpleAudioplayerComponent implements OnInit {

  private iSongs: Song[] = [];
  private iCurrentIndex: number;
  public currentSong: Song;
  public currentTime: number;
  public currentVolume: number;
  public audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
    this.audio.ontimeupdate = () => this.currentTime = this.audio.currentTime;
    this.currentVolume = 1;
  }

  ngOnInit(): void {
  }

  @Input('songs')
  set songs(songs: Song[]) {
    this.iSongs = songs;
    this.currentIndex = this.iSongs && this.iSongs.length ? 0 : null;
  }

  get songs(): Song[] {
    return this.iSongs;
  }

  set currentIndex(index: number) {
    const song = typeof index === 'number' ? this.songs[index] : null;

    if (!song) {
      this.iCurrentIndex = null;
      this.currentSong = null;
    } else {
      this.iCurrentIndex = index;
      this.currentSong = song;
    }

    this.currentTime = 0;
    this.pause();
    this.audio.src = song ? song.url : null;
  }

  get currentIndex(): number {
    return this.iCurrentIndex;
  }

  async play(index?: number) {
    if (!this.audio) {
      return null;
    }

    if (typeof index === 'number') {
      this.currentIndex = index;
    }

    return typeof this.currentIndex === 'number' ?  await this.audio.play() : null;
  }

  pause() {
    if (!this.audio) {
      return null;
    }

    return typeof this.currentIndex === 'number' ? this.audio.pause() : null;
  }

  async toggle() {
    if (!this.audio) {
      return null;
    }

    return this.audio.paused ? await this.play() : this.pause();
  }

  async next() {
    const next = this.currentIndex + 1;
    next <= this.songs.length - 1 ? this.currentIndex = next : null;

    this.play();
  }

  async previous() {
    const previous = this.currentIndex - 1;
    previous >= 0 ? this.currentIndex = previous : null;

    this.play();
  }

  volumeChange(event: any) {
    this.currentVolume = event.value;
    this.audio.volume = this.currentVolume;
  }

  getDuration() {
    if (!this.audio) {
      return null;
    }

    const duration = this.audio.duration;

    if (!duration) {
      return null;
    }

    const minutes = Math.floor(duration / 60);
    const seconds = Math.round(duration - minutes * 60);

    return `${minutes}:${seconds}`;
  }

  getCurrentTime() {
    if (!this.audio) {
      return null;
    }

    const current = this.audio.currentTime;

    if (!current) {
      return null;
    }

    const minutes = Math.floor(current / 60);
    const seconds = Math.round(current - minutes * 60);

    return `${minutes}:${seconds}`;
  }

  setCurrentTime(event: any) {
    if (!this.audio) {
      return null;
    }

    this.audio.currentTime = event.value;
    this.currentTime = event.value;
  }

  getCurrentVolume() {
    if (!this.currentVolume) {
      return null;
    }

    return `${Math.round(this.currentVolume * 100)}`;
  }

  formatLabelVolume(value: number) {
    return `${Math.round(value * 100)}%`;
  }

}
