import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompressorsComponent } from './autoaircompressors.component';

describe('AutocompressorsComponent', () => {
  let component: AutocompressorsComponent;
  let fixture: ComponentFixture<AutocompressorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutocompressorsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AutocompressorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
