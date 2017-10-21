import { Component } from '@angular/core';
// import { Router } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'my-selector',
	templateUrl: './selector.component.html',
	styleUrls: ['./selector.component.css']
})

export class SelectorComponent {

	valueCheck = {
		text: false,
		password: false,
		textarea: false,
		radio: false,
		checkbox: false,
		select: false
	}

	onSelect(event:string){
		for(let pro in this.valueCheck){					
			if(pro == event){
				this.valueCheck[pro] = true;
			}else{
				this.valueCheck[pro] = false;
			}
		}
	}
}