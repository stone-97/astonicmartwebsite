import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuttyknifeComponent } from './puttyknife.component';

describe('PuttyknifeComponent', () => {
  let component: PuttyknifeComponent;
  let fixture: ComponentFixture<PuttyknifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PuttyknifeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PuttyknifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
