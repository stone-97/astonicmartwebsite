import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrometersComponent } from './micrometers.component';

describe('MicrometersComponent', () => {
  let component: MicrometersComponent;
  let fixture: ComponentFixture<MicrometersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MicrometersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicrometersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
