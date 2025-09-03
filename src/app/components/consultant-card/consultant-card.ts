import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Consultant } from '../../models/consultant.model';
import { LucideAngularModule, MapPin, Star } from 'lucide-angular';

@Component({
  selector: 'app-consultant-card',
  standalone: true,
  templateUrl: './consultant-card.html',
  imports: [LucideAngularModule],
})
export class ConsultantCard {
  readonly MapPin = MapPin;
  readonly Star = Star;
  @Input() consultant!: Consultant;
}
