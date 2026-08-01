import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcretescreedersComponent } from './concretescreeders.component';

describe('ConcretescreedersComponent', () => {
  let component: ConcretescreedersComponent;
  let fixture: ComponentFixture<ConcretescreedersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcretescreedersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcretescreedersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
