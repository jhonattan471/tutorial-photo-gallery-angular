import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { GpsComponent } from './gps.component';
import { GeolocationService } from '../services/geolocation.service';


@NgModule({
    imports: [CommonModule, FormsModule, IonicModule,],
    declarations: [GpsComponent],
    exports: [GpsComponent],
    providers: [GeolocationService]
})
export class GpsComponentModule { }
