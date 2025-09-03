import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Consultant } from '../../models/consultant.model';
import { ConsultantCard } from '../consultant-card/consultant-card';
import { FilterToolbar } from '../filter-toolbar/filter-toolbar';
import { ConsultantService } from '../../services/consultant';

@Component({
  selector: 'app-consultant-list',
  standalone: true,
  imports: [ConsultantCard, FilterToolbar],
  templateUrl: './consultant-list.html',
})
export class ConsultantList implements OnInit {
  filteredConsultants: Consultant[] = [];
  expertiseList: string[] = [];

  constructor(private consultantService: ConsultantService) {}

  ngOnInit() {
    this.onFilterExpertiseChange('Todas');
    this.expertiseList = this.consultantService.getExpertise();
  }

  onFilterExpertiseChange(expertise: string) {
    this.filteredConsultants = this.consultantService.getConsultants(expertise);
  }
}
