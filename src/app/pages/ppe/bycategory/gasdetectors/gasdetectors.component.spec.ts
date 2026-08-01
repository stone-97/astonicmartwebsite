import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasdetectorsComponent } from './gasdetectors.component';

describe('GasdetectorsComponent', () => {
  let component: GasdetectorsComponent;
  let fixture: ComponentFixture<GasdetectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GasdetectorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GasdetectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
