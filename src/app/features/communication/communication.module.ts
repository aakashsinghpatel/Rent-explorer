import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommunicationPanel } from './communication-panel/communication-panel';

@NgModule({
  declarations: [CommunicationPanel],
  imports: [CommonModule, FormsModule, RouterLink],
  exports: [CommunicationPanel]
})
export class CommunicationModule {}
