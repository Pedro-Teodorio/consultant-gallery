import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'app-filter-toolbar',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './filter-toolbar.html',
})
export class FilterToolbar {
  readonly ChevronDown = ChevronDown;
  @Input() expertise: string[] = [];
  @Output() selectedExpertiseChange = new EventEmitter<string>();
  selectedExpertise: string = 'Todas';

  onExpertiseChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const expertise = selectElement.value;
    this.selectedExpertise = expertise;
    this.selectedExpertiseChange.emit(expertise);
  }

  onClearFilter() {
    this.selectedExpertiseChange.emit('Todas');
    this.selectedExpertise = 'Todas';
  }
}
