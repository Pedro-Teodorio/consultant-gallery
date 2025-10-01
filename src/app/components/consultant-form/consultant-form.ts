import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConsultantService } from '../../services/consultant';
import { Consultant } from '../../models/consultant.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultant-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './consultant-form.html',
  styleUrls: ['./consultant-form.css']
})
export class ConsultantFormComponent implements OnInit {
  consultantForm: FormGroup;
  isEditMode: boolean = false;
  consultantId: number | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private consultantService: ConsultantService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Inicializa o formulário reativo com validações
    this.consultantForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      title: ['', [Validators.required, Validators.minLength(5)]],
      bio: ['', [Validators.required, Validators.minLength(10)]],
      expertise: ['', [Validators.required, Validators.minLength(2)]],
      location: ['', [Validators.required, Validators.minLength(5)]],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      experience: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
    // Verifica se é modo de edição
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.consultantId = +id;
        this.loadConsultantData();
      }
    });
  }

  loadConsultantData(): void {
    if (this.consultantId !== null) {
      const consultant = this.consultantService.getConsultantById(this.consultantId);
      if (consultant) {
        // Divide a expertise em uma string separada por vírgula para o formulário
        const expertiseString = consultant.expertise.join(', ');
        
        this.consultantForm.patchValue({
          name: consultant.name,
          title: consultant.title,
          bio: consultant.bio,
          expertise: expertiseString,
          location: consultant.location,
          rating: consultant.rating,
          experience: consultant.experience
        });
      }
    }
  }

  onSubmit(): void {
    if (this.consultantForm.valid) {
      // Processa expertise transformando a string em array
      const expertiseArray = this.consultantForm.value.expertise
        .split(',')
        .map((item: string) => item.trim())
        .filter((item: string) => item !== '');
      
      const consultantData: Consultant = {
        ...this.consultantForm.value,
        expertise: expertiseArray,
        id: this.isEditMode && this.consultantId ? this.consultantId : this.generateId()
      };

      if (this.isEditMode && this.consultantId !== null) {
        this.consultantService.updateConsultant(consultantData);
      } else {
        this.consultantService.addConsultant(consultantData);
      }

      this.router.navigate(['/consultants']);
    }
  }

  generateId(): number {
    // Gera um ID único com base no timestamp para o mock
    return Date.now();
  }

  onCancel(): void {
    this.router.navigate(['/consultants']);
  }
}