import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionladdersComponent } from './extensionladders.component';

describe('ExtensionladdersComponent', () => {
  let component: ExtensionladdersComponent;
  let fixture: ComponentFixture<ExtensionladdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtensionladdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtensionladdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
