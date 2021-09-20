const { log, clear } = console
clear()

import Blockchain from "./blockchain.js"

const bitcoin = new Blockchain()

const prevHash =
    "21967d6a971f0ed2fe627ba7cbaa727ec66979fe6f53b5ef72644347847e4adc"

const currentBlockData = [
    {
        amount: 10,
        sender: "a1a2a3",
        recipient: "b1b2b3",
    },
    {
        amount: 20,
        sender: "a1a2a3",
        recipient: "b1b2b3",
    },
    {
        amount: 30,
        sender: "a1a2a3",
        recipient: "b1b2b3",
    },
]

const nonce = 20100

// bitcoin.createNewBlock(99, prevHash, "a1a2")

// log(bitcoin.proofOfWork(prevHash, currentBlockData))
// log(bitcoin.hashBlock(prevHash, currentBlockData, nonce))

log(bitcoin)
