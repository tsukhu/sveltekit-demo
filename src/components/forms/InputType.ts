export enum InputType {
	text = 'text',
	password = 'password',
	email = 'email',
	number = 'number',
	date = 'date',
	dateTimeLocal = 'datetime-local',
	month = 'month',
	search = 'search',
	time = 'time',
	week = 'week',
	tel = 'tel',
	url = 'url',
	checkbox = 'checkbox',
	radio = 'radio',
	file = 'file',
	range = 'range',
	color = 'color',
	hidden = 'hidden',
	select = 'select'
}

export enum ButtonType {
	submit = 'submit',
	reset = 'reset',
	button = 'button'
}

export interface FormButtonProps {
	type: ButtonType;
	label: string;
	clickHandler?: () => void;
}

export interface BaseInputProps {
	type: InputType;
	label: string;
}

export interface InputProps extends BaseInputProps {
	placeholder?: string; // for input
	multiple?: boolean; // for input and select
}

export interface TextAreaProps extends BaseInputProps {
	placeholder?: string; // for input
	rows?: number; // for input and select
}

export interface RadioProps extends BaseInputProps {
	value: string; // for radio buttons
	group: string;
	checked?: boolean; // for checkbox and radio
}

export interface SelectProps extends BaseInputProps {
	multiple?: boolean; // for input and select
	options: string[]; // for select
}

export interface CheckProps extends BaseInputProps {
	checked?: boolean; // for checkbox
}



