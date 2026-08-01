import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletstackersComponent } from './palletstackers.component';

describe('PalletstackersComponent', () => {
  let component: PalletstackersComponent;
  let fixture: ComponentFixture<PalletstackersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PalletstackersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PalletstackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
