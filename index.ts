// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

interface IFormData {
	email: string,
	title: string,
	text: string,
	checkbox: boolean,
}

const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', (e) => {
	e.preventDefault();
	const formData = updateFormData();
	if(validateFormData(formData)) {
		checkFormData(formData);
	} 
}));

function updateFormData(): IFormData {
	const email = document.querySelector('#email') as HTMLInputElement;
	const title = document.querySelector('#title') as HTMLInputElement;
	const text =  document.querySelector('#text') as HTMLTextAreaElement;
	const checkbox = document.querySelector('#checkbox') as HTMLInputElement;
	return {
		email: email ? email.value : "",
		title: title ? title.value : "",
		text: text ? text.value : "",
		checkbox: checkbox ? checkbox.checked : false,
	}
}

function validateFormData(data: IFormData): boolean {
	// Если каждое из свойств объекта data правдиво...
	for(let el in data) {
		if(!data[el as keyof IFormData]) {
			console.log("Please, complete all fields");
			createWarning(true, "Please, complete all fields");
			return false;
		} else {
			continue;
		}
	}
	createWarning(false);
	return true;
}

function checkFormData(data: IFormData): boolean {
	const { email } = data;
	const emails: string[] = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

	// Если email совпадает хотя бы с одним из массива
	const filteredEmails = emails.filter(el => el === email);
	if (filteredEmails.length > 0) {
		console.log("This email is already exist");
		createWarning(true, "This email is already exist");
		return false;
	} else {
		console.log("Posting data...");
		createWarning(true, "Posting data...");

		setTimeout(() => {
			const forms = document.querySelectorAll("form");
			forms.forEach(form => {
				form.reset();
			}); 
			createWarning(false);
		}, 2000);

		return true;
	}
}

function createWarning(flag: boolean = false, msg: string = "") {
	let p = document.querySelector('#warningFlag') as HTMLParagraphElement;
	if(p) {
		p.remove();
	} 
	if (flag) {
		let newP = document.createElement('p');
		newP.id = 'warningFlag';
		newP.textContent = msg;
		const body = document.querySelector('body');
		if(body) {
			body.append(newP);
		} 
	} 
}