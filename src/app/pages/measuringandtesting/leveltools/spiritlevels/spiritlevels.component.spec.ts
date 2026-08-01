import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritlevelsComponent } from './spiritlevels.component';

describe('SpiritlevelsComponent', () => {
  let component: SpiritlevelsComponent;
  let fixture: ComponentFixture<SpiritlevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpiritlevelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpiritlevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
