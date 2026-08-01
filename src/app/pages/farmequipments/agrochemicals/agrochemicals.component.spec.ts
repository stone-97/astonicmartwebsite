import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrochemicalsComponent } from './agrochemicals.component';

describe('AgrochemicalsComponent', () => {
  let component: AgrochemicalsComponent;
  let fixture: ComponentFixture<AgrochemicalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgrochemicalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgrochemicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
