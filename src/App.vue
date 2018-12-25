<template>
  <div id="app">
    <h1>
      Byteball paper wallet
    </h1>
    <div class="content">
      <b>Env</b>
      <select v-model="env">
        <option value="livenet">Livenet</option>
        <option value="testnet">Testnet</option>
      </select>
      <button @click="generateRandomWallet">
        Generate new random wallet
      </button>
      <p>
        If you want to run the script locally you can download the files
        <a href="https://github.com/bonuschain/byteball-paperwallet/tree/master/docs" target="_blank">here</a>.
        This script will work even without internet.
      </p>
      <div v-show="seed">
        <b>Seed</b>
        <p>{{seed}}</p>
        <b>Path</b>
        <p>{{path}}</p>
        <b>WIF</b>
        <p>{{wif}}</p>
        <b>Public key</b>
        <p>{{pubkey}}</p>
        <b>Address</b>
        <p>{{address}}</p>
      </div>
    </div>
  </div>
</template>

<script>
const utils = require('byteball/lib/utils');
const Mnemonic = require('bitcore-mnemonic');

export default {
  name: 'app',
  data() {
    return {
      env: 'livenet',
      seed: null,
      path: null,
      wif: null,
      pubkey: null,
      address: null
    };
  },
  methods: {
    generateRandomWallet() {
      let mnemonic = new Mnemonic();
      while (!Mnemonic.isValid(mnemonic.toString())) {
        mnemonic = new Mnemonic();
      }
      this.seed = mnemonic.phrase;
      this.path = this.env === 'testnet' ? "m/44'/1'/0'/0/0" : "m/44'/0'/0'/0/0";
      const xPrivKey = mnemonic.toHDPrivateKey();
      const { privateKey } = xPrivKey.derive(this.path);
      const privKeyBuf = privateKey.bn.toBuffer({ size: 32 });
      const testnet = this.env === 'testnet';
      this.wif = utils.toWif(privKeyBuf, testnet);
      this.pubkey = privateKey.publicKey.toBuffer().toString('base64');
      const definition = ['sig', { pubkey: this.pubkey }];
      this.address = utils.getChash160(definition);
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  max-width: 540px;
  margin: 60px auto;
}

.content {
  text-align: left;
}

input, textarea, select, button {
  font-size: 16px;
  width: 100%;
  border: 1px solid #ccc;
  margin: 4px 0 16px;
  padding: 4px 8px;
  border-radius: 4px;
}

button {
  outline: 0;
  padding: 8px;
  cursor: pointer;
}

p {
  margin: 4px 0 16px;
}
</style>
