import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditIdentityUsersV1Component } from './create-edit-identity-users-v1.component';

describe('CreateEditIdentityUsersV1Component', () => {
  let component: CreateEditIdentityUsersV1Component;
  let fixture: ComponentFixture<CreateEditIdentityUsersV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditIdentityUsersV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditIdentityUsersV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
