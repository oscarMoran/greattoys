import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { GaleriaComponent } from './Components/galeria/galeria.component';
import { ContactoComponent } from './Components/contacto/contacto.component';


const APP_ROUTES  : Routes = [
    {path : 'home' , component : HomeComponent},
    {path : 'galeria' , component : GaleriaComponent},
    {path : 'contacto' , component: ContactoComponent},
    {path : '**',pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports : [RouterModule.forRoot(APP_ROUTES, {useHash:true})],
    exports :[RouterModule]
})

export class AppRoutingModule{}