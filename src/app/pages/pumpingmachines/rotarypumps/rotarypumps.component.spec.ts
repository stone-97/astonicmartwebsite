import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotarypumpsComponent } from './rotarypumps.component';

describe('RotarypumpsComponent', () => {
  let component: RotarypumpsComponent;
  let fixture: ComponentFixture<RotarypumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RotarypumpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RotarypumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
