import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CablerampsComponent } from './cableramps.component';

describe('CablerampsComponent', () => {
  let component: CablerampsComponent;
  let fixture: ComponentFixture<CablerampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CablerampsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CablerampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
