import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactadhesivesComponent } from './contactadhesives.component';

describe('ContactadhesivesComponent', () => {
  let component: ContactadhesivesComponent;
  let fixture: ComponentFixture<ContactadhesivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactadhesivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactadhesivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
