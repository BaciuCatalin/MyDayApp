export class Task {
    public text: string;
    public day: string;
    public reminder: boolean;

    constructor( text: string, day: string, reminder: boolean){
        this.text = text;
        this.day = day;
        this.reminder = reminder;
    }
}


