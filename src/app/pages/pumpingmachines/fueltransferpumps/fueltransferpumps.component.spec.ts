import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FueltransferpumpsComponent } from './fueltransferpumps.component';

describe('FueltransferpumpsComponent', () => {
  let component: FueltransferpumpsComponent;
  let fixture: ComponentFixture<FueltransferpumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FueltransferpumpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FueltransferpumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
