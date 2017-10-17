const Account = artifacts.require("Account")
chai = require("chai")
chaiAsPromised = require("chai-as-promised")

chai.use(chaiAsPromised)

expect = chai.expect

contract("Account", function(accounts) {
  describe("Account contract", function()  {
    it("Gets an instance", function() {
      return Account.deployed()
        .then(function(instance) {
          account = instance
        })
    })
  })

  describe("Variables", function() {
    describe("Name", function() {
      it("should allow set a name", function() {
        return account.setName("Maria")
          .then(function(response) {
            expect(response).to.not.be.an("error")
          })
      })
      it("should return the name set before", function() {
        return account.name()
          .then(function(name) {
            expect(name).to.be.equal("Maria")
          })
      })
      it("should not allow to change the name from another account", function() {
        return expect(account.setName("Pedro", {"from": accounts[1]})).to.be.eventually.rejected
      })
      it("should return the name set originally", function() {
        return account.name()
          .then(function(name) {
            expect(name).to.be.equal("Maria")
          })
      })
    })

    describe("Balance", function() {
      it("should start with 1000 tokens by default", function() {
        return account.balance()
          .then(function(balance) {
            expect(balance.toString()).to.be.equal("1000")
          })
      })
    })
  })
})
