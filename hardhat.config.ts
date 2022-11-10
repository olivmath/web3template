import { HardhatUserConfig } from "hardhat/types"
import "@nomicfoundation/hardhat-toolbox"
import { config } from "dotenv"

config()
// const { API_URL, PRVK } = process.env

module.exports = {
    solidity: "0.8.17",
    networks: {
        // defaultNetwork: "matic",
        // matic: {
        //     url: API_URL,
        //     accounts: [`0x${PRVK}`]
        // }
        hardhat: {
            mining: {
                auto: true,
                interval: 5000
            }
        }
    }
}
