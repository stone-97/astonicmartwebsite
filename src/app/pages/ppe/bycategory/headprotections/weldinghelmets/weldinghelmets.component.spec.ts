import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldinghelmetsComponent } from './weldinghelmets.component';

describe('WeldinghelmetsComponent', () => {
  let component: WeldinghelmetsComponent;
  let fixture: ComponentFixture<WeldinghelmetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeldinghelmetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeldinghelmetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
