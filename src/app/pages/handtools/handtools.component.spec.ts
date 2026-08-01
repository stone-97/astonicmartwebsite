import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandtoolsandaccessoriesComponent } from './handtools.component';

describe('HandtoolsComponent', () => {
  let component: HandtoolsandaccessoriesComponent;
  let fixture: ComponentFixture<HandtoolsandaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandtoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
