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
      })
  },

  getName: () => {
    let self = this
      return new Promise((resolve, reject) => {
        self.instance
          .then(account => { return account.name() })
          .then(name => { resolve(name) })
          .catch(error => { reject(error) })
      })
  },

  getBalance: () => {
    let self = this
      return new Promise((resolve, reject) => {
        self.instance
          .then(account => { return account.balance() })
          .then(balance => { resolve(balance.toString()) })
          .catch(error => { reject(error) })
      })
  },

  setName: (name) => {
    let self = this
      return new Promise((resolve, reject) => {
        window.web3.eth.getCoinbase()
          .then((coinbase, error) => {
            if(error) {
              console.error(error)
            } else {
              self.instance
                .then(account => { return account.setName(name, {from: coinbase}) })
                .then(result => { resolve(result) })
                .catch(error => { reject(error) })
            }
          })
      })
  }
}

export default Account
