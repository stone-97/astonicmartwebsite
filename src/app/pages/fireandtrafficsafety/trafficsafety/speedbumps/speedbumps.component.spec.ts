import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedbumpsComponent } from './speedbumps.component';

describe('SpeedbumpsComponent', () => {
  let component: SpeedbumpsComponent;
  let fixture: ComponentFixture<SpeedbumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeedbumpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeedbumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
