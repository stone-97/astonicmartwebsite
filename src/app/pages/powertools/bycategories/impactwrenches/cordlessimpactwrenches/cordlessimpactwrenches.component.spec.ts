import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordlessimpactwrenchesComponent } from './cordlessimpactwrenches.component';

describe('CordlessimpactwrenchesComponent', () => {
  let component: CordlessimpactwrenchesComponent;
  let fixture: ComponentFixture<CordlessimpactwrenchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CordlessimpactwrenchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CordlessimpactwrenchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
