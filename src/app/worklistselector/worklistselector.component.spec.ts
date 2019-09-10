import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklistselectorComponent } from './worklistselector.component';

describe('WorklistselectorComponent', () => {
  let component: WorklistselectorComponent;
  let fixture: ComponentFixture<WorklistselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorklistselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorklistselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
