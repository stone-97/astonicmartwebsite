import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlampsComponent } from './headlamps.component';

describe('HeadlampsComponent', () => {
  let component: HeadlampsComponent;
  let fixture: ComponentFixture<HeadlampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadlampsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadlampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
