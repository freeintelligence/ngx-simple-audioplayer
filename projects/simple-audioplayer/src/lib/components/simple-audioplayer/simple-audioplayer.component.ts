import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-audioplayer',
  templateUrl: './simple-audioplayer.component.html',
  styleUrls: ['./simple-audioplayer.component.scss']
})
export class SimpleAudioplayerComponent implements OnInit {

  audio: HTMLAudioElement;

  constructor() { }

  ngOnInit(): void {
    this.audio = new Audio();
  }

}
