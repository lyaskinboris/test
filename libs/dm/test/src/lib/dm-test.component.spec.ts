import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmTestComponent } from './dm-test.component';
import { CommonModule } from '@angular/common';

describe('DmTestComponent', () => {
  let fixture: ComponentFixture<DmTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DmTestComponent],
      imports: [CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DmTestComponent);

    fixture.detectChanges();
  });

  it('Некорректный тест', () => {
    expect(true).toBe('false');
  });
});
