import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningaccessoriesComponent } from './cleaningaccessories.component';

describe('CleaningaccessoriesComponent', () => {
  let component: CleaningaccessoriesComponent;
  let fixture: ComponentFixture<CleaningaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CleaningaccessoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CleaningaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
