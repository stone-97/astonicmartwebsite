import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolishingpadsandbuffersComponent } from './polishingpadsandbuffers.component';

describe('PolishingpadsandbuffersComponent', () => {
  let component: PolishingpadsandbuffersComponent;
  let fixture: ComponentFixture<PolishingpadsandbuffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolishingpadsandbuffersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolishingpadsandbuffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
