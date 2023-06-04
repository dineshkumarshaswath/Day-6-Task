// 3. Write a "person" class to hold all the details.

class Person {
    constructor(name = "name", fathername = "fathername", dob = 0, gender = "gender", address = "address",
        SSLCDetails = "sslcdetails", HSCDetails = "hscdetails", 
        UGDetails = "ug details", interest = "interest") {
        this.name = name;
        this.fathername = fathername;
        this.dob = dob;
        this.gender = gender;
        this.address = address;
        this.SSLCDetails = SSLCDetails;
        this.HSCDetails = HSCDetails;
        this.UGDetails = UGDetails;
        this.interest = interest

    }

    details() {
        console.log(
`My name is : ${this.name}
My father name is : ${this.fathername}
My date of birth is : ${this.dob}
Gender : ${this.gender}
My address is : ${this.address}
SSLC Details : ${this.SSLCDetails}
HSC Details : ${this.HSCDetails}
UG Details : ${this.UGDetails}
My interests are : ${this.interest}`)
    }
}

let  person1 = new Person("Ravi", "Rahul", "12/02/2000", "male",
    "43,1st street,covai", "95%,Government  high School,coimbatore",
    "90% ,Government higher secondary school,coimbatore", "85%,Government college,coimbatore",
    "drawing,reading");
 person1.details();
 var person2 = new Person();
person2.details();
 

