const sha256 = require('sha256');
const currentNodeUrl = process.argv[3];
const { v4 : uuid } = require('uuid');

function Blockchain() {
    this.chain = [];
    this.pendingTransactions = [];

    this.currentNodeUrl = currentNodeUrl;
    this.networkNodes = [];
    
    this.createNewBlock(100, '0', '0');
}

Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length +1 ,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.pendingTransactions = []
    this.chain.push(newBlock);

    return newBlock;
}

Blockchain.prototype.getLastBlock = function (){
    return this.chain[this.chain.length-1];
}

Blockchain.prototype.createNewTransaction = function (amount, sender, recipient){
    const newTransaction = {
        transactionId: uuid().split('-').join(''),
        amount: amount,
        sender: sender,
        recipient: recipient
    };

    return newTransaction;

    this.pendingTransactions.push(newTransaction);

    //mevcut block'ta değil bir sonraki blockta yer alacağı için 
    //son block'un index property'sindeki değeri alıp 1 arttırıp dönüyoruz
    return this.getLastBlock()['index'] + 1;
}

Blockchain.prototype.addTranscactionToPendingTransactions = function(transactionObj) {
    this.pendingTransactions.push(transactionObj);
    return this.getLastBlock()['index'] + 1;
}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + 
                            nonce.toString() +
                            JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);

    while(hash.substring(0, 4) !== '0000'){
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        
    }

    return nonce;
}

Blockchain.prototype.chainIsValid = function(blockchain) {
    let validChain = true;
    for (let i = 1; i < blockchain.length; i++) {
        const currentBlock = blockchain[i];
        const previousBlock = blockchain[i-1];
        const blockHash = this.hashBlock(
            previousBlock['hash'], 
            {
                transactions:  currentBlock['transactions'], 
                index: currentBlock['index']
            },
            currentBlock['nonce']);
        
        if(blockHash.substring(0,4) !== '0000'){
            validChain = false;
        }

        console.log(currentBlock['previousBlockHash'] );

        console.log(currentBlock['hash'] );
        console.log(blockHash);

        if(currentBlock['previousBlockHash'] !== previousBlock['hash']){
             validChain = false;
        }
    }

    console.log('validChain: ',validChain);
    
    const genesisBlock = blockchain[0];
    const correctNonce = genesisBlock['nonce'] === 100;
    const correctPreviousBlockHash = genesisBlock['previousBlockHash'] === '0';
    const correctHash = genesisBlock['hash'] === '0';
    const correctTransactions = genesisBlock['transactions'].length === 0;

    console.log('correctNonce: ',correctNonce);
    console.log('correctPreviousBlockHash: ',correctPreviousBlockHash);
    console.log('correctHash: ',correctHash);
    console.log('correctTransactions: ',correctTransactions);
    

    if(!correctNonce || !correctPreviousBlockHash || !correctHash || !correctTransactions){
        validChain = false;
    }

    return validChain;
}

Blockchain.prototype.getBlock = function(blockHash){
    let blockFound = null;
    this.chain.forEach(block=>{
        if(block.hash === blockHash){
            blockFound = block;
        }
    });
    return blockFound;
}

Blockchain.prototype.getTransaction = function(transactionId){
    let transactionFound = null;
    let blockFound = null;
    this.chain.forEach(block=>{
        block.transactions.forEach(trx=>{
            if(trx.transactionId == transactionId){
                transactionFound = trx;
                blockFound = block;
            }
        });
    });

    return {
        transaction: transactionFound,
        block: blockFound
    };
}

Blockchain.prototype.getAddress = function(address){
    const addressTransactions = [];
    
    this.chain.forEach(block=>{
        block.transactions.forEach(trx=>{
            if(trx.recipient === address || trx.sender === address){
                addressTransactions.push(trx);
            }
        });
    });

    let balance = 0;
    
    addressTransactions.forEach(trx=>{
        if(trx.recipient === address){
            balance += trx.amount;
        } else if(trx.sender === address){
            balance -= trx.amount;
        }
    });

    return {
        transactions: addressTransactions,
        balance: balance
    };
}

module.exports = Blockchain;