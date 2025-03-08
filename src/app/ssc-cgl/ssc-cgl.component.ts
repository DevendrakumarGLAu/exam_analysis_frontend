import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ssc-cgl',
  templateUrl: './ssc-cgl.component.html',
  styleUrls: ['./ssc-cgl.component.css']
})
export class SscCglComponent implements OnInit  {
examForm!: FormGroup;
selectedExam: string = '';
formFields: any[] = [];
  formConfig: any = {};

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.examForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.loadFormConfig();
  }

  loadFormConfig() {
    this.http.get('/assets/ssc-form-config.json').subscribe((config: any) => {
      this.formFields = config || [];

      // Reset and create new form controls
      this.examForm = this.fb.group({});
      this.formFields.forEach((field) => {
        this.examForm.addControl(
          field.key,
          this.fb.control('', field.required ? Validators.required : null)
        );
      });
    });
  }


  onSubmit(){
    if (this.examForm.valid) {
      console.log('Submitted Data:', this.examForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
