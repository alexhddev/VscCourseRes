import { randomUUID } from 'crypto'

class BaseClass {}

export class CoolChecker extends BaseClass {

    generateId(){
        const id = randomUUID()
        return id;
    }

}

