import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingandgrindingdiscComponent } from './cuttingandgrindingdisc.component';

describe('CuttingandgrindingdiscComponent', () => {
  let component: CuttingandgrindingdiscComponent;
  let fixture: ComponentFixture<CuttingandgrindingdiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuttingandgrindingdiscComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuttingandgrindingdiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
