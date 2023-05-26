interface IForm {
	login: string;
	password: string;
}

const validationData: CreateValidationDataType<IForm> = {
	login: { isValid: false, errorMsg: "At least 3 characters" },
	password: { isValid: true },
};

type CreateValidationDataType<T> = {
	[P in keyof T]: {isValid: true} | {isValid: false; errorMsg: string}
}
