
import * as vscode from 'vscode';
import { DataService } from './services/DataService';


export function activate(context: vscode.ExtensionContext) {

	const dataService = new DataService();

	let disposable = vscode.commands.registerCommand('weather-ext.helloWorld', () => {

		vscode.window.showInputBox({
			value: 'Please enter city'
		}).then(async city =>{
			if (city) {
				const result = await dataService.getWeather(city);
				console.log(result)
			}
		})
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
