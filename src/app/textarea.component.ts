import { Component } from '@angular/core';
import { Textarea } from './data-interface';
import { FormService } from './form.service';
 
@Component({
	moduleId: module.id,
	selector: 'my-textarea',
	templateUrl: './textarea.component.html'
})

export class TextareaComponent implements Textarea{

	constructor(private formService: FormService){}
	
	label = '';
	placeholder = '';
	id =  '';
	class = '';
	name = '';
	required = false;
	rows:number;
	cols:number;

	storeData(){
		let textFormData = <Textarea>{
			type: 'textarea',
			label: this.label,
			id: this.id,
			class: this.class,
			name: this.name,
			rows: this.rows,
			cols: this.cols,
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
	}
}