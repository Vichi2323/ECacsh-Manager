import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentUsersTabComponent } from './environment-users-tab.component';

describe('EnvironmentUsersTabComponent', () => {
  let component: EnvironmentUsersTabComponent;
  let fixture: ComponentFixture<EnvironmentUsersTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentUsersTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentUsersTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
