import { NgModule } from '@angular/core';
import { SimpleAudioplayerComponent } from './components/simple-audioplayer/simple-audioplayer.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [SimpleAudioplayerComponent],
  imports: [
    MaterialModule,
  ],
  exports: [SimpleAudioplayerComponent]
})
export class SimpleAudioplayerModule { }
