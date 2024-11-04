import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface TeamRanking {
  position: number;
  teamName: string;
  points: number;
  matchesWon: number;
  matchesLost: number;
  matchesDrawn: number;
  touchdownRatio: number;
  foulRatio: number;
  teamValue: number;
}

@Component({
  standalone: true,
  imports: [MatTableModule, CurrencyPipe],
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css'],
})
export class ClasificacionComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'teamName',
    'points',
    'matchesWon',
    'matchesLost',
    'matchesDrawn',
    'touchdownRatio',
    'foulRatio',
    'teamValue',
  ];

  dataSource: TeamRanking[] = [
    {
      position: 1,
      teamName: 'Equipo A',
      points: 30,
      matchesWon: 10,
      matchesLost: 2,
      matchesDrawn: 1,
      touchdownRatio: 1.5,
      foulRatio: 0.8,
      teamValue: 1500000,
    },
    {
      position: 2,
      teamName: 'Equipo B',
      points: 28,
      matchesWon: 9,
      matchesLost: 3,
      matchesDrawn: 1,
      touchdownRatio: 1.4,
      foulRatio: 0.7,
      teamValue: 1450000,
    },
    {
      position: 3,
      teamName: 'Equipo C',
      points: 25,
      matchesWon: 8,
      matchesLost: 4,
      matchesDrawn: 1,
      touchdownRatio: 1.3,
      foulRatio: 0.6,
      teamValue: 1400000,
    },
    {
      position: 4,
      teamName: 'Equipo D',
      points: 22,
      matchesWon: 7,
      matchesLost: 5,
      matchesDrawn: 1,
      touchdownRatio: 1.2,
      foulRatio: 0.5,
      teamValue: 1350000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
