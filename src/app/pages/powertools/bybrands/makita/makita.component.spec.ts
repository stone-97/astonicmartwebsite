import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakitaComponent } from './makita.component';

describe('MakitaComponent', () => {
  let component: MakitaComponent;
  let fixture: ComponentFixture<MakitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
