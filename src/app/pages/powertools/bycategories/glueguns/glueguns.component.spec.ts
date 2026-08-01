import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GluegunsComponent } from './glueguns.component';

describe('GluegunsComponent', () => {
  let component: GluegunsComponent;
  let fixture: ComponentFixture<GluegunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GluegunsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GluegunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
