import { createAuthTokens, getHeaders, postData } from "./apiAuth";
import { GLOBALS } from "./globals";
import { create } from 'apisauce';

export async function trackAppLaunches(url) {
	console.log("===CALLED TRACK LAUNCHES IN JS===");
	console.log("URL :", url);
	try {
		const postBody = await postData();
		const api = create({
			baseURL: url + '/API',
			timeout: GLOBALS.timeoutAverage,
			headers: getHeaders(true),
			auth: createAuthTokens(),
		});
		console.log("===API===", api);
		const response = await api.post('/UserAPI?method=trackAppLaunches', postBody);
		console.log("RESPONSE: ", response);
		return response.ok;
	} catch (error) {
		console.log("TRACK LAUNCH FAILED");
		console.error('Failed to track app launch: ', error);
		return false;
	}
}

export async function trackAppResume(url) {
	try {
		const postBody = await postData();
		const api = create({
			baseURL: url + '/API',
			timeout: GLOBALS.timeoutAverage,
			headers: getHeaders(true),
			auth: createAuthTokens(),
		});
		const response = await api.post('/USserPI?method=trackAppResumes', postBody);
		return response.ok;
	} catch (error) {
		console.error('Failed to track app resume: ', error);
		return false;
	}
}