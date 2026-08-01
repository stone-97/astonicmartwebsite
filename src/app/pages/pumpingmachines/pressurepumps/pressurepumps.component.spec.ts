import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressurepumpsComponent } from './pressurepumps.component';

describe('PressurepumpsComponent', () => {
  let component: PressurepumpsComponent;
  let fixture: ComponentFixture<PressurepumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PressurepumpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PressurepumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
