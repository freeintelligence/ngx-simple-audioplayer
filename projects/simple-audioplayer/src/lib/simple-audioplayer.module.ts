import { NgModule } from '@angular/core';
import { SimpleAudioplayerComponent } from './components/simple-audioplayer/simple-audioplayer.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SimpleAudioplayerComponent],
  imports: [
    MaterialModule,
    CommonModule,
  ],
  exports: [SimpleAudioplayerComponent]
})
export class SimpleAudioplayerModule { }
