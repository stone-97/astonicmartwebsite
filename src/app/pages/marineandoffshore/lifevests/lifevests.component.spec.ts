import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifevestsComponent } from './lifevests.component';

describe('LifevestsComponent', () => {
  let component: LifevestsComponent;
  let fixture: ComponentFixture<LifevestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifevestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifevestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
