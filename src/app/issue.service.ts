
import { Injectable } from '@angular/core';

@Injectable()
export class IssueService {
private issues: Issue[] = [];

constructor() {
const savedIssues = JSON.parse(localStorage.getItem('issues')||"{}");
if (savedIssues) {
this.issues = savedIssues;
}
}

getAllIssues(): Issue[] {
return this.issues;
}

getIssueById(id: number): Issue {
return this.issues.find(issue => issue.id === id);

}

addIssue(issue: Issue): void {
issue.id = Date.now();
this.issues.push(issue);
this.saveIssues();
}

updateIssue(issue: Issue): void {
const index = this.issues.findIndex(i => i.id === issue.id);
this.issues[index] = issue;
this.saveIssues();
}

deleteIssue(issue: Issue): void {
const index = this.issues.findIndex(i => i.id === issue.id);
this.issues.splice(index, 1);
this.saveIssues();
}

private saveIssues(): void {
localStorage.setItem('issues', JSON.stringify(this.issues));
}
}

export interface Issue {
id?: number;
title: string;
description: string;
}