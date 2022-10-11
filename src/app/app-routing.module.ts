import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './landing/landing.component'
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';



const routes: Routes = [
  // {
    //   path:'user',
    //   loadChildren: () => 
    //   import("./user/user.module").then(m => m.UserModule) 
    // },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'register',
      component:RegisterComponent
    },
    {
      path:'student',
      component:StudentComponent
    },
    {
      path:'',
      redirectTo:'landing',
      pathMatch:'full',
    },
    {
      path:'faculty',
      loadChildren: () => import('./modules/faculty/faculty.module').then((m)=>m.FacultyModule),
    },
    {
      path:'admin',
      component:AdminDashboardComponent
    },
    {
      path:'**',
      component:LandingComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
