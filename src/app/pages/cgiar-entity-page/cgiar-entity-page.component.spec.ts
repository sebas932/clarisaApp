import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CgiarEntityPageComponent } from './cgiar-entity-page.component';

describe('CgiarEntityPageComponent', () => {
  let component: CgiarEntityPageComponent;
  let fixture: ComponentFixture<CgiarEntityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CgiarEntityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CgiarEntityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
