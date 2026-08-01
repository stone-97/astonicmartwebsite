import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllenkeysComponent } from './allenkeys.component';

describe('AllenkeysComponent', () => {
  let component: AllenkeysComponent;
  let fixture: ComponentFixture<AllenkeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllenkeysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllenkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
