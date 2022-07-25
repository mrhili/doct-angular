import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutinoComponent } from './layoutino.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [
    {
        path: '', component: LayoutinoComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }