import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailersComponent } from './nailers.component';

describe('NailersComponent', () => {
  let component: NailersComponent;
  let fixture: ComponentFixture<NailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NailersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
