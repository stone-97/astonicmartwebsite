import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralguntoolsComponent } from './generalguntools.component';

describe('GunsandtrimmersComponent', () => {
  let component: GeneralguntoolsComponent;
  let fixture: ComponentFixture<GeneralguntoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralguntoolsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GeneralguntoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
