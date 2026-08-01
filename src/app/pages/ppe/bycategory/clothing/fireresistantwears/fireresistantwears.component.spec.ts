import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireresistantwearsComponent } from './fireresistantwears.component';

describe('FireresistantwearsComponent', () => {
  let component: FireresistantwearsComponent;
  let fixture: ComponentFixture<FireresistantwearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FireresistantwearsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FireresistantwearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
