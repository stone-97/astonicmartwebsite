import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyinstrumentsComponent } from './surveyinstruments.component';

describe('SurveyinstrumentsComponent', () => {
  let component: SurveyinstrumentsComponent;
  let fixture: ComponentFixture<SurveyinstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurveyinstrumentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurveyinstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
