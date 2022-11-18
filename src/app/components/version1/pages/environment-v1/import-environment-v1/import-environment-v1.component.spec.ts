import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportEnvironmentV1Component } from './import-environment-v1.component';

describe('ImportEnvironmentV1Component', () => {
  let component: ImportEnvironmentV1Component;
  let fixture: ComponentFixture<ImportEnvironmentV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportEnvironmentV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportEnvironmentV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
