import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../../interfaces/song.interface';

@Component({
  selector: 'simple-audioplayer',
  templateUrl: './simple-audioplayer.component.html',
  styleUrls: ['./simple-audioplayer.component.scss']
})
export class SimpleAudioplayerComponent implements OnInit {

  private iSongs: Song[] = [];
  private iCurrent: Song;
  public currentTime: number;
  public audio: HTMLAudioElement;

  constructor() { }

  ngOnInit(): void {
  }

  @Input('songs')
  set songs(songs: Song[]) {
    this.iSongs = songs;

    if (this.iSongs && this.iSongs.length) {
      this.current = this.iSongs[0];
    }
  }

  get songs(): Song[] {
    return this.iSongs;
  }

  set current(song: Song) {
    this.iCurrent = song;
    this.currentTime = 0;
    this.audio = new Audio(song ? song.url : null);
    this.audio.ontimeupdate = () => this.currentTime = this.audio.currentTime;
  }

  get current(): Song {
    return this.iCurrent;
  }

  async play() {
    return await this.audio.play();
  }

  pause() {
    return this.audio.pause();
  }

  async toggle() {
    return this.audio.paused ? await this.play() : this.pause();
  }

  getDuration() {
    const duration = this.audio.duration;

    if (!duration) {
      return null;
    }

    const minutes = Math.floor(duration / 60);
    const seconds = Math.round(duration - minutes * 60);

    return `${minutes}:${seconds}`;
  }

  getCurrentTime() {
    const current = this.audio.currentTime;

    if (!current) {
      return null;
    }

    const minutes = Math.floor(current / 60);
    const seconds = Math.round(current - minutes * 60);

    return `${minutes}:${seconds}`;
  }

  setCurrentTime(event: any) {
    this.audio.currentTime = event.value;
    this.currentTime = event.value;
  }

}
