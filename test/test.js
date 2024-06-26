const chai = require('chai');
const expect = chai.expect;


const Employee = require('../classes/employee');
const Manager = require('../classes/manager');

//1-Create employess
const hobbes = new Manager('Hobbes',1000000,'Founder');
const calvin = new Manager('Calvin', 130000, 'Director',hobbes);
const susie = new Manager('Susie', 100000, 'TA Manager', calvin);
const lily = new Employee ('Lily', 90000,'TA', susie);
const clifford = new Employee('Clifford', 90000, 'TA', susie);

/* //2-Add employees to managers
hobbes.addEmployee(calvin);
calvin.addEmployee(susie);
susie.addEmployee(lily);
susie.addEmployee(clifford); */

//3- Calculate bonus
const bonusMultiplier = 0.05;

const hobbesBonus = hobbes.calculateBonus(bonusMultiplier);
const calvinBonus = calvin.calculateBonus(bonusMultiplier);
const susieBonus = susie.calculateBonus(bonusMultiplier);
const lilyBonus = lily.calculateBonus(bonusMultiplier);
const cliffordBonus = clifford.calculateBonus(bonusMultiplier);

console.log(hobbesBonus);
console.log(calvinBonus);
console.log(susieBonus);
console.log(lilyBonus);
console.log(cliffordBonus);

//4-Output bonuses
console.log(`If ${hobbes.name} gets a bonus multiplier of ${bonusMultiplier}, their bonus will be $${hobbesBonus.toFixed(2)}. `)
console.log(`If ${calvin.name} gets a bonus multiplier of ${bonusMultiplier}, their bonus will be $${calvinBonus.toFixed(2)}. `)
console.log(`If ${susie.name} gets a bonus multiplier of ${bonusMultiplier}, their bonus will be $${susieBonus.toFixed(2)}. `)
console.log(`If ${lily.name} gets a bonus multiplier of ${bonusMultiplier}, their bonus will be $${lilyBonus.toFixed(2)}. `)
console.log(`If ${clifford.name} gets a bonus multiplier of ${bonusMultiplier}, their bonus will be $${cliffordBonus.toFixed(2)}. `)


//5-Seertions using Chai
describe('Bonus Calculation', () => {
    it('should calculate bonuses correctly', () =>{
        expect(hobbesBonus).to.equal(70500);
        expect(calvinBonus).to.equal(20500);
        expect(susieBonus).to.equal(14000);
        expect(lilyBonus).to.equal(4500);
        expect(cliffordBonus).to.equal(4500);
    });
});
