import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JigsawsComponent } from './jigsaws.component';

describe('JigsawsComponent', () => {
  let component: JigsawsComponent;
  let fixture: ComponentFixture<JigsawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JigsawsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JigsawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
