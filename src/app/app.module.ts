import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LessonComponent } from './lesson/lesson.component';
import {ReverseStr} from './search-str.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    ReverseStr

  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
