
// export const config = generateConfig({
//   env: process.env.NEXT_PUBLIC_ENV ?? "localhost",
//   infuraKey: process.env.NEXT_PUBLIC_INFURA_KEY
// })

const generateConfig = (network, chain) => {
  const infuraKey = process.env.NEXT_PUBLIC_INFURA_KEY

  return {
    ETHEREUM: {
      ["mainnet" || "1" || 1 || 0x1]: {
        name: "mainnet",
        chainId: 1,
        urls: {
          rpc: `https://mainnet.infura.io/v3/${infuraKey}}`,
          wss: `wss://mainnet.infura.io/ws/v3/${infuraKey}}`
        },
      },
      ["sepolia" || "11155111" || 11155111 || 0x11155111]:
        {
          name: "sepolia",
          chainId: 0x11155111,
          urls: {
            rpc: `https://sepolia.infura.io/v3/${infuraKey}}`,
            wss: `wss://sepolia.infura.io/ws/v3/${infuraKey}}`
          },
      },
      ["goerli" || "5" || 5 || 0x5]: {
        name: "goerli",
        chainId: 0x5,
        urls: {
          rpc: `https://sepolia.infura.io/v3/${infuraKey}}`,
          wss: `wss://sepolia.infura.io/ws/v3/${infuraKey}}`
        },
      },
      ["localhost" || "1337" || 1337 || 0x1337]: {
        name: "localhost",
        chainId: 0x1337,
        urls: {
          rpc: "http://localhost:8545",
          wss: "wss://localhost:8545"
        },
      },

      DEFAULT: {
        name: "localhost",
        chainId:  0x1337,
        urls: {
          rpc: "http://localhost:8545",
          wss: "wss://localhost:8545"
        },
      }
    }
  }[network][chain]
}

// const generateConfig = ({ env, infuraKey }) => {
//   switch (env.toLowerCase()) {
//     case "mainnet" || "1" || 1 || 0x1:
//       return {
//         name: "mainnet",
//         chainId: 1,
//         urls: {
//           rpc: `https://mainnet.infura.io/v3/${infuraKey}}`,
//           wss: `wss://mainnet.infura.io/ws/v3/${infuraKey}}`
//         },
//       }
//     case "sepolia" || "11155111" || 11155111 || 0x11155111:
//       return {
//         name: "sepolia",
//         chainId: 0x11155111,
//         urls: {
//           rpc: `https://sepolia.infura.io/v3/${infuraKey}}`,
//           wss: `wss://sepolia.infura.io/ws/v3/${infuraKey}}`
//         },
//       }
//     case "goerli" || "5" || 5 || 0x5:
//       return {
//         name: "goerli",
//         chainId: 0x5,
//         urls: {
//           rpc: `https://sepolia.infura.io/v3/${infuraKey}}`,
//           wss: `wss://sepolia.infura.io/ws/v3/${infuraKey}}`
//         },
//       }
//     case "localhost" || "1337" || 1337 || 0x1337:
//       return {
//         name: "localhost",
//         chainId: 0x1337,
//         urls: {
//           rpc: "http://localhost:8545",
//           wss: "wss://localhost:8545"
//         },
//       }

//     DEFAULT
//       return {
//         name: "localhost",
//         chainId:  0x1337,
//         urls: {
//           rpc: "http://localhost:8545",
//           wss: "wss://localhost:8545"
//         },
//       }
//   }
// }