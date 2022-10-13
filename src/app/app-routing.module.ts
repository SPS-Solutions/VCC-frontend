import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './landing/landing.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


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
      loadChildren: () => import('./modules/admin/admin.module').then((m)=>m.AdminModule),
    },
    {
      path:'student',
      loadChildren: () => import('./modules/student/student.module').then((m)=>m.StudentModule),
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
