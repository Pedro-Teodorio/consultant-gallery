import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Consultant } from '../../models/consultant.model';
import { LucideAngularModule, MapPin, Star, Edit3, Trash2 } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultant-card',
  standalone: true,
  templateUrl: './consultant-card.html',
  imports: [LucideAngularModule, CommonModule],
})
export class ConsultantCard {
  readonly MapPin = MapPin;
  readonly Star = Star;
  readonly Edit3 = Edit3;
  readonly Trash2 = Trash2;
  
  @Input() consultant!: Consultant;
  @Input() showActions: boolean = false;
  @Output() editConsultant = new EventEmitter<number>();
  @Output() deleteConsultant = new EventEmitter<number>();

  onEdit() {
    this.editConsultant.emit(this.consultant.id);
  }

  onDelete() {
    this.deleteConsultant.emit(this.consultant.id);
  }
}
