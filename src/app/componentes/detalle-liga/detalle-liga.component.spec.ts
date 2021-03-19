import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLigaComponent } from './detalle-liga.component';

describe('DetalleLigaComponent', () => {
  let component: DetalleLigaComponent;
  let fixture: ComponentFixture<DetalleLigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleLigaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
