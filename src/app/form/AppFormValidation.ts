const nameValidationPattern = /^[a-zA-Z.\- ]+$/;
const dateValidationPattern = /^\d{4}-\d{2}-\d{2}$/;
const emailValidationPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const addressValidationPattern = /^[a-zA-Z0-9.,\- ]+$/;
const amountValidationPattern = /^\d+$/;

export const validateName = (name: string): boolean => nameValidationPattern.test(name);
export const validateDate = (date: string): boolean => dateValidationPattern.test(date);
export const validateEmail = (email: string): boolean => emailValidationPattern.test(email);
export const validateAddress = (address: string): boolean => addressValidationPattern.test(address);
export const validateAmount = (amount: string): boolean => amountValidationPattern.test(amount);