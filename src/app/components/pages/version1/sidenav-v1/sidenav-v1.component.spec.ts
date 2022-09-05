import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavV1Component } from './sidenav-v1.component';

describe('SidenavV1Component', () => {
  let component: SidenavV1Component;
  let fixture: ComponentFixture<SidenavV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
