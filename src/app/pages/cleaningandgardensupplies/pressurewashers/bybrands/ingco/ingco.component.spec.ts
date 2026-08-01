import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngcoComponent } from './ingco.component';

describe('IngcoComponent', () => {
  let component: IngcoComponent;
  let fixture: ComponentFixture<IngcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngcoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
