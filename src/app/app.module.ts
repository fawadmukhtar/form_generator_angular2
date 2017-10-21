import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { FormsModule } from '@angular/forms';

//  load components and App Component is root component
import {  AppComponent } from './app.component';
import { SelectorComponent } from './selector.component'; 
import { TextComponent } from './text.component';
import { PasswordComponent } from './password.component';
import { TextareaComponent } from './textarea.component';
import { RadioComponent } from './radio.component';
import { CheckboxComponent } from './checkbox.component';
import { SelectComponent } from './select.component';
import { JsonOutputComponent } from './json-output.component';

// load routing module
// import { RoutingModule } from './routing-module';

// load form service
import { FormService } from './form.service'; 


@NgModule({
	imports: [
		BrowserModule,
		FormsModule
		],
	declarations: [
		AppComponent,
		SelectorComponent,
		TextComponent,
		PasswordComponent,
		TextareaComponent,
		RadioComponent,
		CheckboxComponent,
		SelectComponent,
		JsonOutputComponent
		],
	providers: [ FormService ],
	bootstrap: [AppComponent] // its root component
})

export class AppModule{
	
}