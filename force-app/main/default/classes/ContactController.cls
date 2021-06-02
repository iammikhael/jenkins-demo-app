public without sharing class ContactController{
    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContacts(Id accountId){
        try {
            return [SELECT Id, Name, Phone, Email FROM Contact WHERE AccountId =: accountId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}