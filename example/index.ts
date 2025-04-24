import { createVoidhash, VoidhashSDKError } from "voidhash";

if (!process.env.VOIDHASH_SECRET_KEY) {
	throw new Error("VOIDHASH_SECRET_KEY is not set");
}

const voidhash = createVoidhash(process.env.VOIDHASH_SECRET_KEY, {
	debug: true,
	apiUrl: "http://localhost:3000/api/v1",
});

try {
	const customers = await voidhash.customers.list();
	const paywalls = await voidhash.paywalls.list();

	console.log(customers);
	console.log(paywalls);
} catch (e) {
	if (e instanceof VoidhashSDKError) {
		console.log(e.message);
	} else {
		console.log(e);
	}
}

console.log("done");
