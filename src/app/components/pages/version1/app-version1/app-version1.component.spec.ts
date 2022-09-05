import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVersion1Component } from './app-version1.component';

describe('AppVersion1Component', () => {
  let component: AppVersion1Component;
  let fixture: ComponentFixture<AppVersion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppVersion1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppVersion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
