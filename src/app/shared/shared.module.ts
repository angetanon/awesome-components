import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component'
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { UsernamePipe } from './pipes/username.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  //On déclare les components
  declarations: [
    CommentsComponent,
    ShortenPipe,
    UsernamePipe,
    TimeAgoPipe,
    HighlightDirective
  ],
  //Permets d'être réutilisable dans les components déclarés
  imports: [
    CommonModule,//permet d'impoter les components
    MaterialModule,
    ReactiveFormsModule
  ],
  //Permets d'être réutilisable dans le reste de l'application
  exports: [
    CommentsComponent,
    MaterialModule,
    ReactiveFormsModule,
    ShortenPipe,
    UsernamePipe,
    TimeAgoPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
