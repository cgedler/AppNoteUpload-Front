import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './auth/user/user.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { StudentComponent } from './pages/student/student.component';
import { SectionComponent } from './pages/section/section.component';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { JwtInterceptorService } from './auth/login/jwt-interceptor.service';
import { ErrorInterceptorService } from './auth/login/error-interceptor.service';
import { EvaluationFormComponent } from './pages/evaluation-form/evaluation-form.component';
import { SectionFormComponent } from './pages/section-form/section-form.component';
import { StudentFormComponent } from './pages/student-form/student-form.component';
import { SubjectFormComponent } from './pages/subject-form/subject-form.component';
import { TeacherFormComponent } from './pages/teacher-form/teacher-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TeacherComponent,
    SubjectComponent,
    StudentComponent,
    SectionComponent,
    EvaluationComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    EvaluationFormComponent,
    SectionFormComponent,
    StudentFormComponent,
    SubjectFormComponent,
    TeacherFormComponent 
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatTableModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true},
    provideAnimationsAsync()
],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas, far, fab);
    }
}
