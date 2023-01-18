const {expect}=require('chai');
const {chooseYourCar}=require('./chooseYourCar');

describe('chooseYourCar', () => {
    describe('choosingType', () => {
        it('Invalid Year!', () => {
            expect(()=>chooseYourCar.choosingType('Sedan','Red',1899)).to.throw('Invalid Year!');
            expect(()=>chooseYourCar.choosingType('Sedan','Red',2023)).to.throw('Invalid Year!');
        });
        it('Invalid type!', () => {
            expect(()=>chooseYourCar.choosingType('Station Wagon','Red',2015)).to.throw('This type of car is not what you are looking for.');
        });
        it('Happy path', () => {
            expect(chooseYourCar.choosingType('Sedan','Red',2015)).to.equals('This Red Sedan meets the requirements, that you have.');
            expect(chooseYourCar.choosingType('Sedan','Blue',2010)).to.equals('This Blue Sedan meets the requirements, that you have.');
        });
        it('Case with old year car', () => {
            expect(chooseYourCar.choosingType('Sedan','Yellow',2009)).to.equals('This Sedan is too old for you, especially with that Yellow color.');  
        });
    });
    describe('brandName', () => {
        it('Invalid brands array input', () => {
            expect(()=>chooseYourCar.brandName({},1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(undefined,1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(null,1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(1,1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName('1',1)).to.throw('Invalid Information!');        
        });
        it('Invalid brandIndex number input', () => {
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],'1')).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],-1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],3)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],[])).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],{})).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],undefined)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],null)).to.throw('Invalid Information!');
        });
        it('Remove car', () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],1)).to.equal("BMW, Peugeot");
        });
    });
    describe('CarFuelConsumption', () => {
        it('Invalid distanceInKilometers number input', () => {
            expect(()=>chooseYourCar.carFuelConsumption(0,1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(-1,1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption({},1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption([],1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(undefined,1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(null,1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption('1',1)).to.throw('Invalid Information!');
        });
        it('Invalid consumptedFuelInLitres number input', () => {
            expect(()=>chooseYourCar.carFuelConsumption(1,0)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(1,-1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(1,{})).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(1,[])).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(1,undefined)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(1,null)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(1,'1')).to.throw('Invalid Information!');
        });
        it('Happy path', () => {
            expect(chooseYourCar.carFuelConsumption(100,7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100,6.5)).to.equal('The car is efficient enough, it burns 6.50 liters/100 km.');
        });
        it('With burn too much fuel', () => {
            expect(chooseYourCar.carFuelConsumption(100,11)).to.equal('The car burns too much fuel - 11.00 liters!');
        });
    });
});