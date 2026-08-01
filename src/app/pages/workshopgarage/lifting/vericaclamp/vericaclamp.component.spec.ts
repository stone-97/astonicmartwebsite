import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VericaclampComponent } from './vericaclamp.component';

describe('VericaclampComponent', () => {
  let component: VericaclampComponent;
  let fixture: ComponentFixture<VericaclampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VericaclampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VericaclampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
