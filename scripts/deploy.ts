import hardhat from "hardhat"

async function deploy() {
    console.log("🕐 Deploying Hello World Contract")
    const owner = (await hardhat.ethers.getSigners())[0]
    console.log(owner.toJSON())

    const contractFactory = await hardhat.ethers.getContractFactory(
        "HelloWorld"
    )
    const deployedContract = await contractFactory.deploy()

    console.log(`✅ Contract Deployed Address: ${deployedContract.address}`)
    console.log(`🔑 Contract Owner: ${owner.address}`)
}

deploy().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
