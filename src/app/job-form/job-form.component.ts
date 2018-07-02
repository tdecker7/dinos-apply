import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  preview: boolean = false;
  model: string = '';
  message: string = '';

  constructor() { }

  ngOnInit() {
  }

  formSubmit(form: NgForm, event: any): void {
    event.preventDefault();
    this.message = 'Your application has been submitted!';
    this.model = '';
  }
  
  togglePreview(): void {
    this.preview = !this.preview;
  }
}
