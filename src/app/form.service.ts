import { Injectable } from '@angular/core';


@Injectable()

export class FormService{

	static formData:Array<any> = [];

	pushData(object:{}){
		FormService.formData.push(object);
	}

}