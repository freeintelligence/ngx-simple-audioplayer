import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAudioplayerComponent } from './simple-audioplayer.component';

describe('SimpleAudioplayerComponent', () => {
  let component: SimpleAudioplayerComponent;
  let fixture: ComponentFixture<SimpleAudioplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAudioplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAudioplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
