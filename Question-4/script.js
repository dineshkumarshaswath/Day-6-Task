//4. Write class to calculate the uber price.
 
class Uber{
    constructor(From="place",To="place",EnterKM=0,perkmprice=5){
        this.From=From;
        this.To=To;
        this.EnterKM=EnterKM;
        this.perkmprice=perkmprice;
    }
    ubertotalprice(){
       console.log( 
`from  : ${this.From}
To : ${this.To}
Enter the total KM : ${this.EnterKM} km
Per KM price is : ${this.perkmprice} Rupees  
Total  Uber price is :  ${this.perkmprice*this.EnterKM} Rupees`)
    }
}
 let person1=new Uber("coimbatore","chennai",250);
 person1.ubertotalprice();


