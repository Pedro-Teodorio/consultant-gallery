import { Component, OnInit } from '@angular/core';
import { Consultant } from '../../models/consultant.model';
import { ConsultantCard } from '../consultant-card/consultant-card';
import { FilterToolbar } from '../filter-toolbar/filter-toolbar';
import { ConsultantService } from '../../services/consultant';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultant-list',
  standalone: true,
  imports: [ConsultantCard, FilterToolbar, CommonModule],
  templateUrl: './consultant-list.html',
})
export class ConsultantList implements OnInit {
  filteredConsultants: Consultant[] = [];
  expertiseList: string[] = [];

  constructor(
    private consultantService: ConsultantService,
    public authService: AuthService,  // Tornando público para uso no template
    public router: Router  // Tornando público para uso no template
  ) {}

  ngOnInit() {
    this.onFilterExpertiseChange('Todas');
    this.expertiseList = this.consultantService.getExpertise();
  }

  onFilterExpertiseChange(expertise: string) {
    this.filteredConsultants = this.consultantService.getConsultants(expertise);
  }

  navigateToAddConsultant() {
    if (this.authService.hasAdminProfile()) {
      this.router.navigate(['/consultant-form']);
    }
  }

  editConsultant(id: number) {
    if (this.authService.hasAdminProfile()) {
      this.router.navigate(['/consultant-form', id]);
    }
  }

  deleteConsultant(id: number) {
    if (this.authService.hasAdminProfile()) {
      if (confirm('Tem certeza que deseja excluir este consultor?')) {
        this.consultantService.deleteConsultant(id);
        // Atualiza a lista após exclusão
        this.onFilterExpertiseChange('Todas');
      }
    }
  }
}
