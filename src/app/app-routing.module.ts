import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { EvaluationFormComponent } from './pages/evaluation-form/evaluation-form.component';
import { SectionComponent } from './pages/section/section.component';
import { SectionFormComponent } from './pages/section-form/section-form.component';
import { StudentComponent } from './pages/student/student.component';
import { StudentFormComponent } from './pages/student-form/student-form.component';
import { SubjectComponent} from './pages/subject/subject.component';
import { SubjectFormComponent} from './pages/subject-form/subject-form.component';
import { TeacherComponent} from './pages/teacher/teacher.component';
import { TeacherFormComponent} from './pages/teacher-form/teacher-form.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'login',component:LoginComponent},
    {path:'evaluation',component:EvaluationComponent},
    {path:'evaluation/form',component:EvaluationFormComponent},
    {path:'evaluation/form/:id',component:EvaluationFormComponent},
    {path:'section',component:SectionComponent},
    {path:'section/form',component:SectionFormComponent},
    {path:'section/form/:id',component:SectionFormComponent},
    {path:'student',component:StudentComponent},
    {path:'student/form',component:StudentFormComponent},
    {path:'student/form/:id',component:StudentFormComponent},
    {path:'subject',component:SubjectComponent},
    {path:'subject/form',component:SubjectFormComponent},
    {path:'subject/form/:id',component:SubjectFormComponent},
    {path:'teacher',component:TeacherComponent},
    {path:'teacher/form',component:TeacherFormComponent},
    {path:'teacher/form/:id',component:TeacherFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
