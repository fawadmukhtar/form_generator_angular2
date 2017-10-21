import { Component, ViewChild , ElementRef } from '@angular/core';
import { FormService } from './form.service';

@Component({
	moduleId: module.id,
	selector: 'my-radio',
	templateUrl: './radio.component.html',
	styles: [` div.boxShadow{
			box-shadow: none;
	} `]
})


export class RadioComponent{

	constructor(private formService: FormService){}

	// its for getting element
	@ViewChild('newRadio') element : ElementRef;
	
		// when all view intialize 
	ngAfterViewInit(){
		// console.log(this.element.nativeElement);
	}



	label = '';
	name = '';
	radioValue = '';

	radioObject:{};

	addRadio(){
		// create elements
		if(this.radioValue !== null && this.radioValue !== '' ){
			this.radioObject = {};
			let div = document.createElement('div');
				div.setAttribute('class', 'radio');
				div.setAttribute('class', 'boxShadow');

			let label = document.createElement('label');
			let input = document.createElement('input');
				input.setAttribute('type', 'radio');
				input.setAttribute('name', 'option');
				input.setAttribute('value', this.radioValue);

			let textNode = document.createTextNode(this.radioValue);

			// append element
			label.appendChild(input);
			label.appendChild(textNode);
			div.appendChild(label);



			this.element.nativeElement.append(div);


			let radioOutputBtn: any = document.querySelectorAll
			(`div.form-wrapper input`);
			// console.log(radioOutputBtn);
			for(let i = 0; i < radioOutputBtn.length; i++){
				let value = radioOutputBtn[i].getAttribute('value');
				this.radioObject[value] = value;
			}

			// this.radioObject[this.radioValue] = this.radioValue;
			// console.log(this.radioObject);
		}
	}

	storeData(){
		let textFormData = {
			type: 'radio',
			label: this.label,
			name: this.name,
			radio: this.radioObject
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