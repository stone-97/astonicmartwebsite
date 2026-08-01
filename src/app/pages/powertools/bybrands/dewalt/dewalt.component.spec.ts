import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DewaltComponent } from './dewalt.component';

describe('DewaltComponent', () => {
  let component: DewaltComponent;
  let fixture: ComponentFixture<DewaltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DewaltComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DewaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
