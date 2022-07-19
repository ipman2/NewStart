import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

if (!location.hostname.includes('careline.')) location.href = `${location.protocol}//careline.${location.host}`;
const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {
        path: 'bonusPoint',
        loadChildren: () => import('./bonus-point/bonus-point.module').then(m => m.BonusPointModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'detail/:id',
        loadChildren: () => import('./hero-detail/hero-detail.module').then(m => m.HeroDetailModule)
    },
    {
        path: 'heroes',
        loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
