import { Component } from '@angular/core';
// import { Location } from '@angular/common';
import  { Input } from './data-interface';

// import { JsonOutputComponent } from './json-output.component';

// import form service
import { FormService } from './form.service';

@Component({
	moduleId: module.id,
	selector: 'my-text',
	templateUrl: './text.component.html',
	styleUrls: ['./text.component.css']
})

export class TextComponent implements Input{
	
	constructor(private formService:FormService){}

	label = '';
	placeholder = '';
	id =  '';
	class = '';
	name = '';
	required = false;

	// get diagnostic(){
	// 	return JSON.stringify(this.textFormData);
	// } 
	
	storeData(){
		let textFormData = <Input>{
			type: 'text',
			label: this.label,
			id: this.id,
			class: this.class,
			name: this.name,
			required: this.required,
			placeholder: this.placeholder
		};

		for(let pro in textFormData){
			if(textFormData[pro] == undefined || textFormData[pro] == null){
				if(pro == 'required'){
					textFormData[pro] = false;
				}else{
					textFormData[pro] = '';
				}
			}
		}

		this.formService.pushData(textFormData);
		// let json = JSON.stringify(textFormData);
		// console.log(textFormData);
		// console.log(json);
	}
}