import { Routes } from '@angular/router';
import { CoachComponent } from './coach/coach.component';
import { EquiposComponent } from './equipos/equipos.component';
import { HomeComponent } from './home/home.component';
import { LeagueDetailComponent } from './league/league-detail/league-detail.component';
import { LeagueComponent } from './league/league.component';
import { TournamentComponent } from './tournament/tournament.component';

export const routes: Routes = [
  { path: 'start', component: HomeComponent },
  { path: 'leagues', component: LeagueComponent },
  { path: 'leagues/:id', component: LeagueDetailComponent },
  { path: 'tournaments', component: TournamentComponent },
  { path: 'teams', component: EquiposComponent },
  { path: 'coach', component: CoachComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
];
