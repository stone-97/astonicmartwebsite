import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingpasteComponent } from './testingpaste.component';

describe('PasteComponent', () => {
  let component: TestingpasteComponent;
  let fixture: ComponentFixture<TestingpasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingpasteComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestingpasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
