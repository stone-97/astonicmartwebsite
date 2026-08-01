import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaringtoolsComponent } from './flaringtools.component';

describe('FlaringtoolsComponent', () => {
  let component: FlaringtoolsComponent;
  let fixture: ComponentFixture<FlaringtoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlaringtoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlaringtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
