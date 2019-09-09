import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientworklistComponent } from './clientworklist.component';

describe('ClientworklistComponent', () => {
  let component: ClientworklistComponent;
  let fixture: ComponentFixture<ClientworklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientworklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientworklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
