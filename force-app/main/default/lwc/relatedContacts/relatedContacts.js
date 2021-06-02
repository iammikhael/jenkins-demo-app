import { LightningElement,api,track } from 'lwc';

// Call Apex method (ContactController.getRelatedContacts)
import getRelatedContacts from '@salesforce/apex/ContactController.getRelatedContacts';

const COLUMNS = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' }
];

export default class RelatedContacts extends LightningElement {
    @api recordId; // Inherits the recordId from the Account record page

    @track columns = COLUMNS;
    @track data;
    @track isError = false;
    @track errorMessage;

    // Lifecycle hook which fires when a component is inserted into the DOM
    // onLoad of page
    connectedCallback(){
        this.loadRelatedContacts();
    }

    loadRelatedContacts(){
        // returns a promise
        getRelatedContacts({accountId : this.recordId})
        .then(results=>{
            this.data = results;
            this.isError = false;
        })
        .catch(error=>{
            this.isError = true;
            this.errorMessage = error.body.message;
        })
    }
/**
 * Normal function
 * ---------------
 * function(foo){
 *    return "I am a normal function";
 * }
 *
 * Arrow function (shorthand notation) -- where "str" is the parameter if the function
 * ---------------
 * str=>{
 *    return "I am a norma function";
 * }
**/
}