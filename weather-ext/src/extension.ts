
import * as vscode from 'vscode';
import { DataService } from './services/DataService';

let weatherStatusBarItem: vscode.StatusBarItem;


export function activate(context: vscode.ExtensionContext) {

	const dataService = new DataService();

	let disposable = vscode.commands.registerCommand('weather-ext.getWeather', () => {

		vscode.window.showInputBox({
			value: 'Please enter city'
		}).then(async city =>{
			if (city) {
				const result = await dataService.getWeather(city);
				if (!weatherStatusBarItem) {
					weatherStatusBarItem = vscode.window.createStatusBarItem(
						vscode.StatusBarAlignment.Right,
						100
					)
				}
				weatherStatusBarItem.text = `${result.city} ${result.temperature} ${result.description}`
				weatherStatusBarItem.show();
			}
		})
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
