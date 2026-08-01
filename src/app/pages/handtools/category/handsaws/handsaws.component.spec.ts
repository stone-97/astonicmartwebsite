import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsawsComponent } from './handsaws.component';

describe('HandsawsComponent', () => {
  let component: HandsawsComponent;
  let fixture: ComponentFixture<HandsawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandsawsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandsawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
