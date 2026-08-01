import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmtoolsComponent } from './farmtools.component';

describe('FarmtoolsComponent', () => {
  let component: FarmtoolsComponent;
  let fixture: ComponentFixture<FarmtoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmtoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
