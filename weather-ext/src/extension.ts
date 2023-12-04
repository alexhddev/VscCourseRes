
import * as vscode from 'vscode';
import { DataService } from './services/DataService';

let weatherStatusBarItem: vscode.StatusBarItem;


export function activate(context: vscode.ExtensionContext) {

	const dataService = new DataService();

	let getWeather = vscode.commands.registerCommand('weather-ext.getWeather', () => {
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

	let getWeatherExtended = vscode.commands.registerCommand('weather-ext.getWeatherExtended', () => {
		vscode.window.showInputBox({
			value: 'Please enter city'
		}).then(async city =>{
			if (city) {
				console.log(city)
				const weatherData = await dataService.getWeatherExtended(city);
				vscode.window.showInformationMessage(weatherData, 'Close', 'Open').then(result =>{
					console.log(result)
					if(result == 'Open') {
						vscode.env.openExternal(
							vscode.Uri.parse(`https://openweathermap.org/find?q=${city}`)
						)
					}
				})

			}
		})
	});

	context.subscriptions.push(getWeather, getWeatherExtended);
}

export function deactivate() {}
