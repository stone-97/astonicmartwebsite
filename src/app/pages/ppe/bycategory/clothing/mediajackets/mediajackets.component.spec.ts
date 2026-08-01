import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediajacketsComponent } from './mediajackets.component';

describe('MediajacketsComponent', () => {
  let component: MediajacketsComponent;
  let fixture: ComponentFixture<MediajacketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediajacketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediajacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
