const nacl = require('libsodium-wrappers')

let publicKey, privateKey;

beforeAll(async () => {
    await nacl.ready
});

module.exports = {
    verifyingKey: async function ()
    {
        if(privateKey == null)
        {
            let pairKey = nacl.crypto_sign_keypair();
            publicKey = pairKey.publicKey;
            privateKey = pairKey.privateKey;
        }
        return publicKey;
    },
    sign: async function (signedMsg)
    {
        return nacl.crypto_sign(signedMsg, privateKey);
    }
};