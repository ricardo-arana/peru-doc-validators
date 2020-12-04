import { ResultValid } from './validators.model';

export class Dni {

    status: ResultValid;
    errors: ResultValid[] = [];

    constructor(private number: string, private digit: string) {
        this.status = {
            code: -1,
            message: 'no validado'
        }
        this.validate();
    }

    validate() {
        this.validateDigits();
    }

    get isValid() {
        return this.status.code === 0;
    }
    

    validateDigits() {
        const multiples = [3, 2, 7, 6, 5, 4, 3, 2];
        const dcontrols = {
        numbers: [6, 7, 8, 9, 0, 1, 1, 2, 3, 4, 5],
        letters: ["K", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        };
        const numdni = this.number.substring(0, this.number.length - 1).split("").map( digit => +digit);
        const dcontrol = this.digit;
        const dsum = numdni.reduce((acc, digit, index) => {
            acc += digit * multiples[index];
            return acc;
            }, 0);
        const key = 11 - (dsum % 11);
        const index = key === 11 ? 0 : key;
        if (/^\d+$/.test(this.number)) {
            const valid = dcontrols.numbers[index] === parseInt(dcontrol, 10);
            this.addStatus(valid);
            return;
        }
        const valid = dcontrols.letters[index] === dcontrol;
        this.addStatus(valid);
    }


    private addStatus(valid: boolean) {
        if (valid) {
            this.setValidOk();
        } else {
            this.setValidError('Formato invalido')
        }
    }


    private setValidOk() {
        this.status = {
            code: 0,
            message: 'Documento Valido'
        }
    }

    private setValidError(message: string) {
        this.status = {
            code: 1,
            message
        }
    }


}