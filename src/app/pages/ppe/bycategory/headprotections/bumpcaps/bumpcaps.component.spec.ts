import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BumpcapsComponent } from './bumpcaps.component';

describe('BumpcapsComponent', () => {
  let component: BumpcapsComponent;
  let fixture: ComponentFixture<BumpcapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BumpcapsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BumpcapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
