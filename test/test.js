
var should = require("should");
var Admin = function(name){
    this.name = name;
};
describe("Checking if Admin is created", function(){
    it("Should create the Admin with the correct name", function(){
        debugger
        var mike = new Admin("mike");
        mike.name.should.be.equal("mike");
    });
});

