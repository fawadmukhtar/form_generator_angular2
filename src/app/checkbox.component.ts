import { Component } from '@angular/core';
import { FormService } from './form.service';

@Component({
	moduleId: module.id,
	selector: 'my-checkbox',
	templateUrl: './checkbox.component.html'
})

export class CheckboxComponent {

	constructor(private formService:FormService){}

	label = '';
	name = '';
	required = false;
	
	storeData(){
		let textFormData = {
			type: 'checkbox',
			label: this.label,
			name: this.name,
			required: this.required
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

	}	
}