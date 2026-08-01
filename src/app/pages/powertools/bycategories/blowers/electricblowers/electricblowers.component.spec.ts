import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricblowersComponent } from './electricblowers.component';

describe('ElectricblowersComponent', () => {
  let component: ElectricblowersComponent;
  let fixture: ComponentFixture<ElectricblowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectricblowersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricblowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
