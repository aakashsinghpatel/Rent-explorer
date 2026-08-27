import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApartmentDetailsCommentPanel } from './apartment-details-comment-panel/apartment-details-comment-panel';

@NgModule({
  declarations: [ApartmentDetailsCommentPanel],
  imports: [CommonModule, FormsModule, RouterLink],
  exports: [ApartmentDetailsCommentPanel]
})
export class CommunicationModule {}
