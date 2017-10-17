import contract from 'truffle-contract'
import AccountContract from '@contracts/Account.json'

const Account = {
  contract: null,
  instance: null,

  init: () => {
    let self = this
    new Promise((resolve, reject) => {
      self.contract = contract(AccountContract)
      self.contract.setProvider(window.web3.currentProvider)
      self.instance = self.contract.deployed()
        .then(instance => {
          return instance
        })
      .catch(error => {
        reject(error)
      })
      resolve('Success')
    })
  },

  getName: () => {
    let self = this
    new Promise((resolve, reject) => {
      self.instance.name()
        .then(name => { resolve(name) })
        .catch(error => { reject(error) })
    })
  }
}

export default Account
