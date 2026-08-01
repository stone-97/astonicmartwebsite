import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingbucketsComponent } from './testingbuckets.component';

describe('TestingbucketsComponent', () => {
  let component: TestingbucketsComponent;
  let fixture: ComponentFixture<TestingbucketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingbucketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingbucketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
