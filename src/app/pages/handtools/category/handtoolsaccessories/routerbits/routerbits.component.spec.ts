import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterbitsComponent } from './routerbits.component';

describe('RouterbitsComponent', () => {
  let component: RouterbitsComponent;
  let fixture: ComponentFixture<RouterbitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterbitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterbitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
