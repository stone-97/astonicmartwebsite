import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FueltestingkitsComponent } from './fueltestingkits.component';

describe('FueltestingkitsComponent', () => {
  let component: FueltestingkitsComponent;
  let fixture: ComponentFixture<FueltestingkitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FueltestingkitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FueltestingkitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
