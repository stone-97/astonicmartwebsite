import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DredgepipefloatersComponent } from './dredgepipefloaters.component';

describe('DredgepipefloatersComponent', () => {
  let component: DredgepipefloatersComponent;
  let fixture: ComponentFixture<DredgepipefloatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DredgepipefloatersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DredgepipefloatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
