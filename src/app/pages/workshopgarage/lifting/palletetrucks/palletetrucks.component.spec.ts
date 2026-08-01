import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletetrucksComponent } from './palletetrucks.component';

describe('PalletetrucksComponent', () => {
  let component: PalletetrucksComponent;
  let fixture: ComponentFixture<PalletetrucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PalletetrucksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PalletetrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
