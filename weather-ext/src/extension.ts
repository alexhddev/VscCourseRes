
import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('weather-ext.helloWorld', () => {

		vscode.window.showInformationMessage('Hello World from weather-ext!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
