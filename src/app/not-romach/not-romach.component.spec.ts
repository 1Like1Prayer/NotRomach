import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotRomachComponent } from './not-romach.component';

describe('NotRomachComponent', () => {
  let component: NotRomachComponent;
  let fixture: ComponentFixture<NotRomachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotRomachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotRomachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
