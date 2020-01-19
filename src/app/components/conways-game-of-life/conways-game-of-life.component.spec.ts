import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConwaysGameOfLifeComponent } from './conways-game-of-life.component';

describe('ConwaysGameOfLifeComponent', () => {
  let component: ConwaysGameOfLifeComponent;
  let fixture: ComponentFixture<ConwaysGameOfLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConwaysGameOfLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConwaysGameOfLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
