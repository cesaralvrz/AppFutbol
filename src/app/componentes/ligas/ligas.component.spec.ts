import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigasComponent } from './ligas.component';

describe('LigasComponent', () => {
  let component: LigasComponent;
  let fixture: ComponentFixture<LigasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
