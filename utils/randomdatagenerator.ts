import {faker} from '@faker-js/faker';

export class RandomDataUtils {


   static getFirstName(){
    return faker.person.firstName();
   }

   static getLastName(){
    return faker.person.lastName();
   }

    static getPhoneNumber(){
    return faker.phone.number();
    }

    static getPassword(){
    return faker.internet.password();
    }

   static getEmail(){
    return faker.internet.email();
   }    

    static getFullName(){
    return faker.person.fullName();
    }  

    static getAddress(){
    return faker.location.streetAddress();
    }

    static getCity(){
    return faker.location.city();
    }

    static getRandomCountry(){
    return faker.location.country();
    }   

    static getRandomState(){
    return faker.location.state();
    }

    static getRandomZipCode(){
    return faker.location.zipCode();
    }

    static getRandomCompany(){
    return faker.company.name();
    }

    static getRandomPin(){
    return faker.location.zipCode();
    }

    static getRandomAddress(){
        return faker.location.streetAddress();
    }

    static getRandomCity(){
        return faker.location.city();
    }

    static getRandomPassword(length: number =10):string{
        return faker.internet.password();
    }

    static getRandomAlphanumeric(length: number):string{
        return faker.string.alphanumeric();
    }

    static getRandomNumeric(length:number):string{
        return faker.string.numeric();
    }

    static getRandomUUID():string{
        return faker.string.uuid();
    }

    static getRandomConfirmPaswd():string{
        return  faker.internet.password();
    }


}