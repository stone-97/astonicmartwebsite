import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesawsComponent } from './tablesaws.component';

describe('TablesawsComponent', () => {
  let component: TablesawsComponent;
  let fixture: ComponentFixture<TablesawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablesawsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablesawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
