import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingequipmentComponent } from './testingequipment.component';

describe('TestingequipmentComponent', () => {
  let component: TestingequipmentComponent;
  let fixture: ComponentFixture<TestingequipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingequipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingequipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
