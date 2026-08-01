import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaldetectorsComponent } from './metaldetectors.component';

describe('MetaldetectorsComponent', () => {
  let component: MetaldetectorsComponent;
  let fixture: ComponentFixture<MetaldetectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaldetectorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetaldetectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
