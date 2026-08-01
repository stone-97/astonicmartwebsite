import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilescutterComponent } from './tilescutter.component';

describe('TilescutterComponent', () => {
  let component: TilescutterComponent;
  let fixture: ComponentFixture<TilescutterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TilescutterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TilescutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
