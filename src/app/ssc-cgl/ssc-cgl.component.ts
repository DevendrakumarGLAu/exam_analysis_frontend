import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ExamService } from '../services/exam.service';
import { SnackbarService } from '../services/snackbar.service';
import { ActivatedRoute } from '@angular/router';

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
exam_type: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private examService: ExamService,
    private snackbarService: SnackbarService, private route: ActivatedRoute
  ) {
    this.exam_type = this.route.snapshot.url[0]?.path; 
    this.examForm = this.fb.group({
      answerKeyUrl: ['', Validators.required],
      category: ['', Validators.required],
      horizontalCategory: ['', Validators.required],
      paperLanguage: ['', Validators.required],
      password: ['']
    });
  }

  ngOnInit(): void {
    this.loadFormConfig();
  }

  loadFormConfig() {
    this.http.get('/assets/ssc-form-config.json').subscribe((config: any) => {
      this.formFields = config || [];

      this.examForm = this.fb.group({});
      this.formFields.forEach((field) => {
        this.examForm.addControl(
          field.key,
          this.fb.control('', field.required ? Validators.required : null)
        );
      });
    });
  }


  onSubmit() {
    if (this.examForm.valid) {
      const payload = {
        ...this.examForm.value, // Spread existing form values
        exam_type: this.exam_type // Add exam_type explicitly
      };
      this.examService.saveExamData(payload).subscribe({
        next: (response) => {
          console.log('Submitted Data:', response);
          this.snackbarService.showSuccess('Form submitted successfully!');
          // this.examForm.reset(); // Reset the form on success
        },
        error: (error) => {
          console.error('Error:', error);
          this.snackbarService.showError('Failed to submit form. Please try again.');
        }
      });
    } else {
      this.snackbarService.showError('Please fill all required fields');
    }
  }
}
