import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacuumpumpsComponent } from './vacuumpumps.component';

describe('VacuumpumpsComponent', () => {
  let component: VacuumpumpsComponent;
  let fixture: ComponentFixture<VacuumpumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacuumpumpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacuumpumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
