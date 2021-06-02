import { LightningElement, track } from 'lwc';

export default class Sample extends LightningElement {
    @track displayString = "Hello World";

    handleClick(){
        this.displayString = "Button clicked @ "+ (new Date()).toTimeString();
    }
}