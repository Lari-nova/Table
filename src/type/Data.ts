export type Person = {
	id: string,
	firstName: string,
	lastName: string,
	email: string,
	phone: string,
	description: string,
	address: {
		streetAddress: string,
		city: string,
		state: string,
		zip: string
	},
}
