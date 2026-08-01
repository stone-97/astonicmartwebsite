import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensioncablewiresComponent } from './extensioncablewires.component';

describe('ExtensioncablewiresComponent', () => {
  let component: ExtensioncablewiresComponent;
  let fixture: ComponentFixture<ExtensioncablewiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtensioncablewiresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtensioncablewiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
