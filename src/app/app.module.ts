import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { ListService } from './list.service';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule,
        MatAccordion, MatIcon, MatToolbarModule, MatButton, MatCardModule, MatInputModule , MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';
import { LegalComponent } from './legal/legal.component';
import { CreditsComponent } from './credits/credits.component';
import { TodoComponent } from './todo/todo.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AddComponent,
    ListComponent,
    HomeComponent,
    SkillsComponent,
    ExperiencesComponent,
    ContactComponent,
    LegalComponent,
    CreditsComponent,
    TodoComponent,

  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    AppRoutingModule

  ],
  providers: [AppService, ListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
