import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpulsesealersComponent } from './impulsesealers.component';

describe('ImpulsesealersComponent', () => {
  let component: ImpulsesealersComponent;
  let fixture: ComponentFixture<ImpulsesealersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImpulsesealersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImpulsesealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
