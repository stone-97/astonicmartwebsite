import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstaidsComponent } from './firstaids.component';

describe('FirstaidsComponent', () => {
  let component: FirstaidsComponent;
  let fixture: ComponentFixture<FirstaidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstaidsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstaidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
