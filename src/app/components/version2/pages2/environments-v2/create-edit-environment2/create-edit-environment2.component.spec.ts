import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditEnvironment2Component } from './create-edit-environment2.component';

describe('CreateEditEnvironment2Component', () => {
  let component: CreateEditEnvironment2Component;
  let fixture: ComponentFixture<CreateEditEnvironment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditEnvironment2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditEnvironment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
