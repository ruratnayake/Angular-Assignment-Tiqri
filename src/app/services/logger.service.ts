import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    constructor() { }

    log(message: string, obj?: Object): void {
        (obj) ? console.log(message, obj) : console.log(message);
    }

    warn(message: string, obj?: Object): void {
        (obj) ? console.warn(message, obj) : console.warn(message);
    }

    info(message: string, obj?: Object): void {
        (obj) ? console.info(message, obj) : console.info(message);
    }

    error(message: string, obj?: Object): void {
        (obj) ? console.error(message, obj) : console.error(message);
    }
}