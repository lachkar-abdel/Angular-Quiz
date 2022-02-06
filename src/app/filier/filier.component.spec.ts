/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilierComponent } from './filier.component';

describe('FilierComponent', () => {
  let component: FilierComponent;
  let fixture: ComponentFixture<FilierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
