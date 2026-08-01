import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricrotaryhammerdrillsComponent } from './electricrotaryhammerdrills.component';

describe('ElectricrotaryhammerdrillsComponent', () => {
  let component: ElectricrotaryhammerdrillsComponent;
  let fixture: ComponentFixture<ElectricrotaryhammerdrillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectricrotaryhammerdrillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricrotaryhammerdrillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
