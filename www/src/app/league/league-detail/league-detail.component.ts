import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ClasificacionComponent } from './classification/classification.component';
import { MatchesComponent } from './matches/matches.component';
import { ParticipantsComponent } from './participants/participants.component';

@Component({
  standalone: true,
  selector: 'app-league-detail',
  templateUrl: './league-detail.component.html',
  styleUrls: ['./league-detail.component.css'],
  imports: [
    CommonModule,
    MatTabsModule,
    ClasificacionComponent,
    MatchesComponent,
    ParticipantsComponent,
  ],
})
export class LeagueDetailComponent implements OnInit {
  leagueName: string = 'Liga Invierno 2024';

  constructor() {}

  ngOnInit(): void {
    // Aquí puedes cargar los datos específicos de la liga seleccionada
  }
}
