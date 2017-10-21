import { Component } from '@angular/core';
import { Input } from './data-interface';
import { FormService } from './form.service';


@Component({
	moduleId: module.id,
	selector: 'my-password',
	templateUrl: './password.component.html'
})

export class PasswordComponent implements Input {
	
	label = '';
	placeholder = '';
	id =  '';
	class = '';
	name = '';
	required = false;

	constructor(private formService: FormService){}

	storeData(){
		let passwordFormData = <Input>{
			type: 'password',
			label: this.label,
			id: this.id,
			class: this.class,
			name: this.name,
			required: this.required,
			placeholder: this.placeholder
		};

		for(let pro in passwordFormData){
			if(passwordFormData[pro] == undefined || passwordFormData[pro] == null){
				if(pro == 'required'){
					passwordFormData[pro] = false;
				}else{
					passwordFormData[pro] = '';
				}
			}
		}

		this.formService.pushData(passwordFormData);
	}
}