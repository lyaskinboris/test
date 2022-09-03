import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmTestComponent } from './dm-test.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DmTestComponent],
  exports: [DmTestComponent],
})
export class DmTestModule {}
