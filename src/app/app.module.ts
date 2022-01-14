import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodosListComponent } from './todos-list/todos-list.component';
import { InversePipe } from './inverse.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [AppComponent, TodosListComponent, InversePipe, SearchPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
