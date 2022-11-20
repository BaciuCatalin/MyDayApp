export class Ingredient{
    // static push(arg0: any) {
    //   throw new Error('Method not implemented.');
    // }
    public name: string;
    public amount: number;

    constructor(name: string, amount: number){
        this.name = name;
        this.amount = amount;
    }
}