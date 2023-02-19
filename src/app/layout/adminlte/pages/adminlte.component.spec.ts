import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlteComponent } from './adminlte.component';

describe('AdminlteComponent', () => {
  let component: AdminlteComponent;
  let fixture: ComponentFixture<AdminlteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
