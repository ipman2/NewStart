import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeroDetailRoutingModule} from './hero-detail-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HeroDetailRoutingModule,
    ]
})
export class HeroDetailModule {
}
