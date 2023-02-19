import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { IssueService } from './issue.service';

@NgModule({
imports: [
BrowserModule,
FormsModule,
RouterModule.forRoot([
{ path: '', component: IssueListComponent },
{ path: 'issues/new', component: IssueEditComponent },
{ path: 'issues/:id/edit', component: IssueEditComponent }
])
],
declarations: [
AppComponent,
IssueListComponent,
IssueEditComponent
],
providers: [
IssueService
],
bootstrap: [AppComponent]
})
export class AppModule { }
