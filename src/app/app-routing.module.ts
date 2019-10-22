import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PartnersComponent } from './components/partners/partners.component';
import { LoginComponent } from './components/login/login.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PackageComponent } from './components/package/package.component';
import { ProjectinfoComponent } from './components/projectinfo/projectinfo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsComponent } from './components/ads/ads.component';
import { RegisterComponent } from './components/register/register.component';
import { ProjectdetailsComponent } from './components/projectdetails/projectdetails.component';

const routes: Routes = [
    {path:"" , component: HomeComponent },
    {path:"aboutus" , component: AboutusComponent },
    {path:"contact" , component: ContactComponent },
    {path:"gallery" , component: GalleryComponent },
    {path:"login" , component: LoginComponent },
    {path:"partners" , component: PartnersComponent },
    {path:"pricing" , component: PricingComponent },
    {path:"projects" , component: ProjectsComponent },
    {path:"register" , component: RegisterComponent },
    {path:"services" , component: ServicesComponent },
    {path:"package" , component:PackageComponent },
    {path:"clients" , component: ClientsComponent},
    {path:"profile" , component: ProfileComponent},
    {path:"project-info" , component: ProjectinfoComponent},
    {path:"project-details" , component: ProjectdetailsComponent},
    {path:"forgetpassword" , component: ForgetpasswordComponent},
    {path:"advertise" , component: AdsComponent},
    {path:"**" , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
