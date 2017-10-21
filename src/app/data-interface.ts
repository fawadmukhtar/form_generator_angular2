export interface Attributes {
	label: string,
	id: string,
	class: string,
	name: string,
	required: boolean
}

export interface Input extends Attributes {
	placeholder: string
}

export interface Textarea extends Attributes {
	rows: number,
	cols: number
}



