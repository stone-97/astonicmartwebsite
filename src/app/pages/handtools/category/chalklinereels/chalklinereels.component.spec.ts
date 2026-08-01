import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalklinereelsComponent } from './chalklinereels.component';

describe('ChalklinereelsComponent', () => {
  let component: ChalklinereelsComponent;
  let fixture: ComponentFixture<ChalklinereelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChalklinereelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChalklinereelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
