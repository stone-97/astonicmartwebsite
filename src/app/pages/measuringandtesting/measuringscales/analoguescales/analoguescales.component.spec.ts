import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaloguescalesComponent } from './analoguescales.component';

describe('AnaloguescalesComponent', () => {
  let component: AnaloguescalesComponent;
  let fixture: ComponentFixture<AnaloguescalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnaloguescalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnaloguescalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
