const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
const bc1 = 
{
    chain: [
    {
    index: 1,
    timestamp: 1620927757760,
    transactions: [  ],
    nonce: 100,
    hash: "0",
    previousBlockHash: "0"
    },
    {
    index: 2,
    timestamp: 162092703646,
    transactions: [ ],
    nonce: 18140,
    hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    previousBlockHash: "0"
    },
    {
    index: 3,
    timestamp: 1620927833038,
    transactions: [
    {
    transactionId: "e32581bf6d7b4224892ac51fbf338969",
    amount: 12.5,
    sender: "00",
    recipient: "258eaef4286a47b3a296ce771cc7e008"
    },
    {
    transactionId: "162705ff6a10480cbbb3fad8c198e42d",
    amount: 122,
    sender: "ZAAZAAA",
    recipient: "TUTUER"
    },
    {
    transactionId: "5ebc378e7c4e48268ea60ae1e1eb3995",
    amount: 10,
    sender: "SUFFI",
    recipient: "TUTUER"
    },
    {
    transactionId: "bb6b232d365245e8bcccd250ddcda742",
    amount: 330,
    sender: "SUFFI",
    recipient: "TETHER"
    }
    ],
    nonce: 10964,
    hash: "0000646d834a87bdc4d60a044920acc0447b5d8b66f4cd875bfdfe6742e64122",
    previousBlockHash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
    index: 4,
    timestamp: 1620927888925,
    transactions: [
    {
    transactionId: "46a07dbcf5c34a8cb1762122be081462",
    amount: 12.5,
    sender: "00",
    recipient: "258eaef4286a47b3a296ce771cc7e008"
    },
    {
    transactionId: "34b3ac14cdea4d77820cf1c4988df168",
    amount: 22,
    sender: "ZFAZAFZFA",
    recipient: "TESTNEW"
    },
    {
    transactionId: "2536e4e0fe784454955635e503899923",
    amount: 2312,
    sender: "ZFAZAFZFA",
    recipient: "TESTNEW"
    },
    {
    transactionId: "dd8dd69af3f041d9973306af34cf06a0",
    amount: 12412,
    sender: "ZFAZAFZFA",
    recipient: "TESTNEW"
    },
    {
    transactionId: "b0d9ffa5c45044148c0dca13fa7718d8",
    amount: 55,
    sender: "ZFAZAFZFA",
    recipient: "TESTNEW"
    },
    {
    transactionId: "9e00580a989c4fe28e01802134d2306c",
    amount: 1,
    sender: "TEST",
    recipient: "ZAFZAF"
    }
    ],
    nonce: 47658,
    hash: "0000ec61522158b50fb1ed792f1952f2d2ede67ef721343c4776a9ce886938e3",
    previousBlockHash: "0000646d834a87bdc4d60a044920acc0447b5d8b66f4cd875bfdfe6742e64122"
    },
    {
    index: 5,
    timestamp: 1620927892280,
    transactions: [
    {
    transactionId: "9f72031f71c84b38ae1e2fb1bd027723",
    amount: 12.5,
    sender: "00",
    recipient: "258eaef4286a47b3a296ce771cc7e008"
    }
    ],
    nonce: 52655,
    hash: "00006ccf2687b498f3dae081a8c97a2b8c1206f7e6cfe9aaee230c2378f9c9cc",
    previousBlockHash: "0000ec61522158b50fb1ed792f1952f2d2ede67ef721343c4776a9ce886938e3"
    },
    {
    index: 6,
    timestamp: 1620927902399,
    transactions: [
    {
    transactionId: "82a039e6facf422b93622a5164a4b76d",
    amount: 12.5,
    sender: "00",
    recipient: "258eaef4286a47b3a296ce771cc7e008"
    }
    ],
    nonce: 211929,
    hash: "000025795d1080be90e8fae9b862ad1ca357bbc0e9fb840eaa3c837e8b9ca841",
    previousBlockHash: "00006ccf2687b498f3dae081a8c97a2b8c1206f7e6cfe9aaee230c2378f9c9cc"
    }
    ],
    pendingTransactions: [
    {
    transactionId: "aba5509b503742d298caf2c62cce6770",
    amount: 12.5,
    sender: "00",
    recipient: "258eaef4286a47b3a296ce771cc7e008"
    }
    ],
    currentNodeUrl: "http://localhost:3001",
    networkNodes: [ ]
};

console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));
