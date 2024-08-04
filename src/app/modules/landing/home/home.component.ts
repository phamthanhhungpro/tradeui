import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'landing-home',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [MatButtonModule, RouterLink, MatIconModule, MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        FormsModule],
})
export class LandingHomeComponent {
    filter1: string = '';
    filter2: string = '';
    filter3: string = '';
    searchQuery: string = '';

    // Placeholder for actual search functionality
    onSearch(): void {
        console.log('Search clicked:', this.searchQuery, this.filter1, this.filter2, this.filter3);
    }
}
