import { Component } from '@angular/core';
import { FormService } from './form.service';

@Component({
	moduleId: module.id,
	selector: 'my-json',
	templateUrl: './json-output.component.html'
})

export class JsonOutputComponent{

	myArray = FormService.formData;


	// static myFormData: Array<any> = [];

	// updataValue(object:{}){
	// 	JsonOutputComponent.myFormData.push(object);
	// 	this.myArray.push(1);
	// 	console.log(this.myArray);
	// 	// console.log(JsonOutputComponent.myFormData); 
	// }

	// add(){
	// 	// this.myArray.push(1);
	// 	// console.log(this.myVar);
	// 	console.log(FormService.formData);
	// }


	// when base class member value change then fucntion call in sub class
}