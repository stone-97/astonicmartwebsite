import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokeFirealarmsComponent } from './smoke-firealarms.component';

describe('SmokeFirealarmsComponent', () => {
  let component: SmokeFirealarmsComponent;
  let fixture: ComponentFixture<SmokeFirealarmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmokeFirealarmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmokeFirealarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
