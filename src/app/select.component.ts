import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormService } from './form.service';

@Component({
	moduleId: module.id,
	selector: 'my-select',
	templateUrl: './select.component.html'
})

export class SelectComponent {
	
	constructor(private formService: FormService){}

	// its for getting element
	@ViewChild('newList') element : ElementRef;
	
		// when all view intialize 
	ngAfterViewInit(){
		console.log(this.element.nativeElement);
	}



	label = '';
	name = '';
	listValue = '';
	required = false;

	listObject:{};

	addList(){
		// create elements
		if(this.listValue !== null && this.listValue !== '' ){
			this.listObject = {};
			//  create element
			let option = document.createElement('option');
				option.setAttribute('value', this.listValue);
			let  optionTextNode = document.createTextNode(this.listValue);
			// append element
			option.appendChild(optionTextNode);
			this.element.nativeElement.append(option);

			let listOutput: any = document.querySelectorAll
			(`div.select-list select option`);

			for(let i = 0; i < listOutput.length; i++){
				let value = listOutput[i].getAttribute('value');
				this.listObject[value] = value;
			}

			console.log(this.listObject);
		}
	}

	storeData(){
		let textFormData = {
			type: 'radio',
			label: this.label,
			name: this.name,
			required: this.required,
			list: this.listObject
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