<template>
  <div id="app">
    <h1>
      Byteball paper wallet
    </h1>
    <div class="content">
      <b>Path</b>
      <input v-model="path" />
      <div>
        <b>Seed</b>
        <p>{{seed}}</p>
        <b>WIF</b>
        <p>{{wif}}</p>
        <b>Public key</b>
        <p>{{pubkey}}</p>
        <b>Address</b>
        <p>{{address}}</p>
      </div>
      <button @click="generateRandomWallet">
        Generate new random wallet
      </button>
      <p>
        If you want to run the script locally you can download the files
        <a href="https://github.com/bonuschain/byteball-paperwallet/tree/master/docs" target="_blank">here</a>.
        This script will work even without internet.
      </p>
    </div>
  </div>
</template>

<script>
const Mnemonic = require('bitcore-mnemonic');
const objectHash = require('byteballcore/object_hash');
const wifLib = require('wif');

export default {
  name: 'app',
  data() {
    return {
      path: "m/44'/0'/1'/0/0",
      seed: null,
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
      const xPrivKey = mnemonic.toHDPrivateKey();
      const { privateKey } = xPrivKey.derive(this.path);
      const privKeyBuf = privateKey.bn.toBuffer({ size: 32 });
      this.wif = wifLib.encode(128, privKeyBuf, false);
      this.pubkey = privateKey.publicKey.toBuffer().toString('base64');
      const definition = ['sig', { pubkey: this.pubkey }];
      this.address = objectHash.getChash160(definition);
    }
  },
  mounted() {
    this.generateRandomWallet();
  }
}
</script>

<style>
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

input, textarea, button {
  font-size: 16px;
  width: 100%;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 4px 8px;
  border-radius: 4px;
}

button {
  outline: 0;
  padding: 8px;
}
</style>
