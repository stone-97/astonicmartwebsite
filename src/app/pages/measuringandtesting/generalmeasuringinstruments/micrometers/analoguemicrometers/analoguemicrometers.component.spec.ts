import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaloguemicrometersComponent } from './analoguemicrometers.component';

describe('AnaloguemicrometersComponent', () => {
  let component: AnaloguemicrometersComponent;
  let fixture: ComponentFixture<AnaloguemicrometersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnaloguemicrometersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnaloguemicrometersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
