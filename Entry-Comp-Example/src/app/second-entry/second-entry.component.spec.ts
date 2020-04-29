import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondEntryComponent } from './second-entry.component';

describe('SecondEntryComponent', () => {
  let component: SecondEntryComponent;
  let fixture: ComponentFixture<SecondEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
