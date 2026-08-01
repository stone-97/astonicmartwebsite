import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagclosersComponent } from './bagclosers.component';

describe('BagclosersComponent', () => {
  let component: BagclosersComponent;
  let fixture: ComponentFixture<BagclosersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BagclosersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BagclosersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
