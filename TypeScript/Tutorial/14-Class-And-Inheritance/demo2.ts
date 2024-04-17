class Automobile{
    fuelType:any;
    isIgnition:boolean = true;
    autoName:string = "";

    constructor(fuelType:any,isIgnition:boolean,autoName:string){
        this.fuelType = fuelType;
        this.isIgnition = isIgnition;
        this.autoName = autoName;
    }

    getCompany() {
        return "AutoCompany";
    }
}

class Maruti extends Automobile {
    
}

//if there is no constructor in derived class, constructor of parent class is called.
let m1 = new Maruti("Petrol",true,"Alto 800");
console.log(m1.autoName + "/" + m1.fuelType + "/" + m1.isIgnition);

class Tata extends Automobile {
    SeatsType:any;
    constructor(fuelType:any,isIgnition:boolean,autoName:string,SeatsType:any)
    {
        //parent class constructor needs to be called before derived one.
        //parent class constructor is called using super keyword.
        super(fuelType,isIgnition,autoName);
        this.SeatsType = SeatsType;
    }

    getCompany() {
        //return "Tata Motors";
        //returning parent class method return value from here.
        return super.getCompany();
    }
}

let t1 = new Tata("Diesel",false,"Indica","Leather");
console.log(t1.autoName + "/" + t1.fuelType + "/" + t1.isIgnition + "/" + t1.SeatsType);
//accessing parent class method using derived class object.
//if derived class has the method with same name, priority is given to derived one.
console.log(t1.getCompany());

//we are mainly focussed on two keywords here: extends and super.
//extends keywords extends the functionality of parent class.
//super keyword is used to invoke the methods of parent class.
