import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmersiblepumpsComponent } from './submersiblepumps.component';

describe('SubmersiblepumpsComponent', () => {
  let component: SubmersiblepumpsComponent;
  let fixture: ComponentFixture<SubmersiblepumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmersiblepumpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmersiblepumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
