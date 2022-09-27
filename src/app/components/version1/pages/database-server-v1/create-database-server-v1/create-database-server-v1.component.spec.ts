import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDatabaseServerV1Component } from './create-database-server-v1.component';

describe('CreateDatabaseServerV1Component', () => {
  let component: CreateDatabaseServerV1Component;
  let fixture: ComponentFixture<CreateDatabaseServerV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDatabaseServerV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDatabaseServerV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
