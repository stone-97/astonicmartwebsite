import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciprocatingsawsComponent } from './reciprocatingsaws.component';

describe('ReciprocatingsawsComponent', () => {
  let component: ReciprocatingsawsComponent;
  let fixture: ComponentFixture<ReciprocatingsawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReciprocatingsawsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReciprocatingsawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
