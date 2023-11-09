export function doubleT(arg: number, second: any) {
    return arg * arg
}

export const printMessageT = (message: string) => {
    console.log(message)
}

export class MainHandler {

    private ports: string[] = []


    registerPort(port: string) {
        this.ports.push(port)
    }

    getPort(index: number): string | undefined {
        return this.ports[index]
    }
}
