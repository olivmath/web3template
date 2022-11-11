import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { HelloWorld__factory, HelloWorld } from "../typechain-types"
import { ethers as hardhat } from "hardhat"
import { expect } from "chai"

describe("Hello World Contract", () => {
    /**
     * @DeclareWallet
     * - Owner
     * - Others
     */
    let owner: SignerWithAddress
    let others: SignerWithAddress[]

    /**
     * @DeclareSmartContracts
     * - HelloWorld
     */
    let hw: HelloWorld

    describe("Wallets", async () => {
        it("Create Wallets", async () => {
            ;[owner, ...others] = await hardhat.getSigners()
        })
    })

    describe("Deploy", async () => {
        it("Deploy HelloWorld Contract", async () => {
            const HelloWorld: HelloWorld__factory =
                await hardhat.getContractFactory("HelloWorld")
            hw = await HelloWorld.deploy()
        })
    })

    describe("Hello World Message", () => {
        it("Should return `Hello World` from msg ", async () => {
            const msg = await hw.connect(owner).msg()
            expect(msg).to.equal("Hello World")
        })
    })
})
