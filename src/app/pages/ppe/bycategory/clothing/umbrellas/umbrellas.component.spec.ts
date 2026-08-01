import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbrellasComponent } from './umbrellas.component';

describe('UmbrellasComponent', () => {
  let component: UmbrellasComponent;
  let fixture: ComponentFixture<UmbrellasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UmbrellasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UmbrellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
