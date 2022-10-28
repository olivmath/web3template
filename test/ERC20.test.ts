import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { HelloWorld__factory, HelloWorld } from "../typechain-types"
import { ethers as hardhat } from "hardhat"
import { expect } from "chai"

describe("Hello Contract", () => {
    let HelloWorldContract: HelloWorld
    let owner: SignerWithAddress
    let addrs: SignerWithAddress[]

    beforeEach(async () => {
        ;[owner, ...addrs] = await hardhat.getSigners()

        const HelloWorldContractFactory = (await hardhat.getContractFactory(
            "HelloWorld",
            owner
        )) as HelloWorld__factory
        HelloWorldContract = await HelloWorldContractFactory.deploy()
    })

    describe("Deployment", () => {
        it("Should return `Hello World` from msg ", async () => {
            const msg = await HelloWorldContract.connect(owner).msg()
            expect(msg).to.equal("Hello World")
        })
    })
})
