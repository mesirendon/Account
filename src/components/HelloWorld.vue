<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" aria-describedby="nameHelp" placeholder="Enter your name">
        <small id="nameHelp" class="form-text text-muted">This name will be stored in your account.</small>
      </div>
      <div class="form-group">
        <label for="balance">Balance</label>
        <input type="number" class="form-control" id="balance" v-model="balance" aria-describedby="balanceHelp" disabled>
        <small id="balanceHelp" class="form-text text-muted">Your current balance.</small>
      </div>
      <button type="button" class="btn btn-primary" @click="setName">Submit</button>
    </form>
  </div>
</template>

<script type="text/babel" lang="babel">
import Account from '@/contracts/account'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Simple VueJS App with Solidity contracts support',
      name: '',
      balance: '0'
    }
  },
  beforeCreate () {
    Account.init()
  },
  mounted () {
    this.getName()
    this.getBalance()
  },
  methods: {
    getName () {
      Account.getName().then(name => {
        this.name = name
      })
    },
    getBalance () {
      Account.getBalance().then(balance => {
        this.balance = balance
      })
    },
    setName () {
      Account.setName(this.name).then(console.log)
    }
  }
}
</script>

