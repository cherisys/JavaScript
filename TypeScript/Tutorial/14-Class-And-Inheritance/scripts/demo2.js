"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Automobile = /** @class */ (function () {
    function Automobile(fuelType, isIgnition, autoName) {
        this.isIgnition = true;
        this.autoName = "";
        this.fuelType = fuelType;
        this.isIgnition = isIgnition;
        this.autoName = autoName;
    }
    Automobile.prototype.getCompany = function () {
        return "AutoCompany";
    };
    return Automobile;
}());
var Maruti = /** @class */ (function (_super) {
    __extends(Maruti, _super);
    function Maruti() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Maruti;
}(Automobile));
//if there is no constructor in derived class, constructor of parent class is called.
var m1 = new Maruti("Petrol", true, "Alto 800");
console.log(m1.autoName + "/" + m1.fuelType + "/" + m1.isIgnition);
var Tata = /** @class */ (function (_super) {
    __extends(Tata, _super);
    function Tata(fuelType, isIgnition, autoName, SeatsType) {
        var _this = 
        //parent class constructor needs to be called before derived one.
        //parent class constructor is called using super keyword.
        _super.call(this, fuelType, isIgnition, autoName) || this;
        _this.SeatsType = SeatsType;
        return _this;
    }
    Tata.prototype.getCompany = function () {
        //return "Tata Motors";
        //returning parent class method return value from here.
        return _super.prototype.getCompany.call(this);
    };
    return Tata;
}(Automobile));
var t1 = new Tata("Diesel", false, "Indica", "Leather");
console.log(t1.autoName + "/" + t1.fuelType + "/" + t1.isIgnition + "/" + t1.SeatsType);
//accessing parent class method using derived class object.
//if derived class has the method with same name, priority is given to derived one.
console.log(t1.getCompany());
//we are mainly focussed on two keywords here: extends and super.
//extends keywords extends the functionality of parent class.
//super keyword is used to invoke the methods of parent class.
//# sourceMappingURL=demo2.js.map