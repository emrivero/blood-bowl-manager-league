import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

interface Match {
  team1: string;
  team2: string;
  score1?: number;
  score2?: number;
}

interface Round {
  roundName: string;
  matches: Match[];
}

@Component({
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatTableModule],
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})
export class MatchesComponent {
  rounds: Round[] = [
    {
      roundName: 'Jornada 1',
      matches: [
        { team1: 'Equipo A', team2: 'Equipo B', score1: 2, score2: 1 },
        { team1: 'Equipo C', team2: 'Equipo D', score1: 1, score2: 1 },
      ],
    },
    {
      roundName: 'Jornada 2',
      matches: [
        { team1: 'Equipo A', team2: 'Equipo C', score1: 3, score2: 2 },
        { team1: 'Equipo B', team2: 'Equipo D' },
      ],
    },
    {
      roundName: 'Jornada 3',
      matches: [
        { team1: 'Equipo A', team2: 'Equipo D', score1: 1, score2: 2 },
        { team1: 'Equipo B', team2: 'Equipo C', score1: 2, score2: 2 },
      ],
    },
  ];
}
