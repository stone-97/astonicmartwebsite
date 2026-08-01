import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldingaccessoriesComponent } from './weldingaccessories.component';

describe('WeldingaccessoriesComponent', () => {
  let component: WeldingaccessoriesComponent;
  let fixture: ComponentFixture<WeldingaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeldingaccessoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeldingaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
