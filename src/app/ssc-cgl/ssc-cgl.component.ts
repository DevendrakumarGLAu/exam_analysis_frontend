import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ExamService } from '../services/exam.service';
import { SnackbarService } from '../services/snackbar.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../services/loader.service';

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
response_data :any = null;
isLoading :boolean = false
  constructor(private fb: FormBuilder, private http: HttpClient, private examService: ExamService,
    private snackbarService: SnackbarService, private route: ActivatedRoute ,private loaderService: LoaderService
  ) {
    this.exam_type = this.route.snapshot.url[0]?.path; 
    // this.examForm = this.fb.group({
    //   answerKeyUrl: ['', Validators.required],
    //   category: ['', Validators.required],
    //   horizontalCategory: ['', Validators.required],
    //   paperLanguage: ['', Validators.required],
    //   password: ['']
    // });
  }

  ngOnInit(): void {
    this.loadFormConfig();
    // this.loadFormData();
  }

  loadFormConfig() {
    this.http.get('/assets/ssc-form-config.json').subscribe((config: any) => {
      this.formFields = config || [];

      // Initialize form dynamically based on config
      this.examForm = this.fb.group({});
      this.formFields.forEach((field) => {
        this.examForm.addControl(
          field.key,
          this.fb.control('', field.required ? Validators.required : null)
        );
      });

      // Now load the stored form data after form is fully initialized
      this.loadFormData();
    });
  }

  loadFormData() {
    const storedData = localStorage.getItem('examFormData');
    if (storedData) {
      this.examForm.patchValue(JSON.parse(storedData));
    }
  }

  onSubmit() {
    if (this.examForm.valid) {
      this.loaderService.showLoader();
      this.isLoading = true;
      const payload = {
        ...this.examForm.value, // Spread existing form values
        exam_type: this.exam_type // Add exam_type explicitly
      };
      this.examService.saveExamData(payload).subscribe({
        next: (response) => {
          this.response_data = response
          this.isLoading = false;
          console.log('Submitted Data:', response);
          localStorage.setItem('examFormData', JSON.stringify(this.examForm.value));
          this.snackbarService.showSuccess('Form submitted successfully!');
          this.loaderService.hideLoader(); // Hide loader
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Error:', error);
          this.snackbarService.showError('Failed to submit form. Please try again.');
          this.loaderService.hideLoader(); // Hide loader
        }
      });
    } else {
      this.snackbarService.showError('Please fill all required fields');
    }
  }
}
