import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorLeftComponent } from './creator-left.component';

describe('CreatorLeftComponent', () => {
  let component: CreatorLeftComponent;
  let fixture: ComponentFixture<CreatorLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
