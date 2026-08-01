import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandtoolsaccessoriesComponent } from './handtoolsaccessories.component';

describe('HandtoolsaccessoriesComponent', () => {
  let component: HandtoolsaccessoriesComponent;
  let fixture: ComponentFixture<HandtoolsaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandtoolsaccessoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandtoolsaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
