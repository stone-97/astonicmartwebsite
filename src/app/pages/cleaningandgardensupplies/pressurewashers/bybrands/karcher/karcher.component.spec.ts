import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarcherComponent } from './karcher.component';

describe('KarcherComponent', () => {
  let component: KarcherComponent;
  let fixture: ComponentFixture<KarcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KarcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KarcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
