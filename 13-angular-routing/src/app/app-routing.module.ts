import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'contactus',component:ContactUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'signup',component:RegistrationComponent},
  {path:'',component:RegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
