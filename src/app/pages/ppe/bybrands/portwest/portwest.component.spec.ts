import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortwestComponent } from './portwest.component';

describe('PortwestComponent', () => {
  let component: PortwestComponent;
  let fixture: ComponentFixture<PortwestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortwestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortwestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
