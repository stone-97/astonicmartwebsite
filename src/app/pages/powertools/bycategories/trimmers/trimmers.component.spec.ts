import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimmersComponent } from './trimmers.component';

describe('TrimmersComponent', () => {
  let component: TrimmersComponent;
  let fixture: ComponentFixture<TrimmersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrimmersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrimmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
