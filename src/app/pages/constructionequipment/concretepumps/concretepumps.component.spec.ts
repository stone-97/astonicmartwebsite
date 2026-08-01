import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcretepumpsComponent } from './concretepumps.component';

describe('ConcretepumpsComponent', () => {
  let component: ConcretepumpsComponent;
  let fixture: ComponentFixture<ConcretepumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcretepumpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcretepumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
