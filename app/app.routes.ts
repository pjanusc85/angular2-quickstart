import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        terminal: true
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
