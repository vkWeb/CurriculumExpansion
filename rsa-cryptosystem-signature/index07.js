function hashTheMessage(message) {
  let hashValue = 0;
  for (let i = 0, msgLength = message.length; i < msgLength; ++i) {
    hashValue += message.charCodeAt(i);
  }
  return hashValue;
}

function generatePublicKey() {}

/*
The private key is only known to the user.

Create an empty function `generatePrivateKey()`.
*/
