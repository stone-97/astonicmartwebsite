import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatertestersComponent } from './watertesters.component';

describe('WatertestersComponent', () => {
  let component: WatertestersComponent;
  let fixture: ComponentFixture<WatertestersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WatertestersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatertestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
