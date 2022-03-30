const abi = [
	{
		inputs: [
			{
				internalType: "string",
				name: "_uri",
				type: "string",
			},
			{
				internalType: "string",
				name: "_name",
				type: "string",
			},
			{
				internalType: "string",
				name: "_symbol",
				type: "string",
			},
			{
				internalType: "uint32",
				name: "_totalSupply",
				type: "uint32",
			},
			{
				internalType: "uint256",
				name: "_cost",
				type: "uint256",
			},
			{
				internalType: "bool",
				name: "_open",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool",
			},
		],
		name: "ApprovalForAll",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "to",
				type: "address[]",
			},
		],
		name: "airdrop",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "approve",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "baseTokenURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "cost",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "getApproved",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "maxPerMint",
		outputs: [
			{
				internalType: "uint32",
				name: "",
				type: "uint32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "maxPerWallet",
		outputs: [
			{
				internalType: "uint32",
				name: "",
				type: "uint32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "count",
				type: "uint32",
			},
		],
		name: "mint",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "count",
				type: "uint32",
			},
		],
		name: "mintNFTs",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "open",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "ownerOf",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "count",
				type: "uint32",
			},
			{
				internalType: "bytes32[]",
				name: "proof",
				type: "bytes32[]",
			},
		],
		name: "presaleMint",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [],
		name: "presaleOpen",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				internalType: "bytes",
				name: "_data",
				type: "bytes",
			},
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool",
			},
		],
		name: "setApprovalForAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_baseTokenURI",
				type: "string",
			},
		],
		name: "setBaseURI",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "_commision",
				type: "uint32",
			},
		],
		name: "setCommission",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_cost",
				type: "uint256",
			},
		],
		name: "setCost",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "_max",
				type: "uint32",
			},
		],
		name: "setMaxPerMint",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "_max",
				type: "uint32",
			},
		],
		name: "setMaxPerWallet",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "_open",
				type: "bool",
			},
		],
		name: "setOpen",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "root",
				type: "bytes32",
			},
		],
		name: "setPreSaleAddresses",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "_open",
				type: "bool",
			},
		],
		name: "setPresaleOpen",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "supply",
		outputs: [
			{
				internalType: "uint32",
				name: "",
				type: "uint32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4",
			},
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint32",
				name: "",
				type: "uint32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "transferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "withdraw",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_tokenId",
				type: "uint256",
			},
		],
		name: "tokenURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];

// Constants
const INITIAL_MINT_COUNT = 1;

// Globals
let account, mintCount = INITIAL_MINT_COUNT;

// Contract
const retrieveContract = async (contractAddress) => {
	const web3 = window.web3;

	const contract = new web3.eth.Contract(abi, contractAddress);
	console.log(contract);

	if (web3.eth) {
		try {
			const contract = new web3.eth.Contract(abi, contractAddress);
			console.log(contract);
			return contract;
		} catch (e) {
			console.log(e);
		}
	}
};

const getPublicContractVariables = async (contractAddress) => {

	try {
		const contract = await retrieveContract(contractAddress);

		const balance = await window.web3.eth.getBalance(contractAddress);
		const balanceInEth = window.web3.utils.fromWei(balance);
		const baseTokenUri = await contract.methods.baseTokenURI().call();
		const open = await contract.methods.open().call();

		let presaleOpen = false; // Temporary, presaleOpen is not working
		try {
			presaleOpen = await contract.methods.presaleOpen().call();
		} catch (err) {
			//console.log(err);
		}

		const maxPerMint = await contract.methods.maxPerMint().call();
		const cost = await contract.methods.cost().call();
		const costInEth = window.web3.utils.fromWei(cost);
		const supply = await contract.methods.supply().call();
		const totalSupply = await contract.methods.totalSupply().call();
		const owner = await contract.methods.owner().call();

		return {
			balance,
			balanceInEth,
			baseTokenUri,
			open,
			presaleOpen,
			maxPerMint,
			cost,
			costInEth,
			supply,
			totalSupply,
			owner,
		};
	} catch (e) {
		console.log(e.message);
	}
};


const gql = `
	query GetContract($address: String!) {
		getContract(address: $address) {
			id
			name
			symbol
			type
			author
			blockchain
			address
			nftCollection {
				price
				currency
				size
				royalty
				baseUri
				whitelist
			}
		}
	}
`



const fetchWhitelist = async (contractAddress) => {
	const response = await fetch("https://api.ambition.so/graphql", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query:`
				query GetContract($address: String!) {
					getContract(address: $address) {
						nftCollection {
							whitelist
						}
					}
				}
			`,
			variables: {
				address: contractAddress
			}
		})
	})

	const whitelist = response.json()
	return whitelist;
};


// compare array buffers
function compare(a, b) {
	for (let i = a.length; -1 < i; i -= 1) {
		if ((a[i] !== b[i])) return false;
	}
	return true;
}
const presaleMint = async (price, contractAddress, whitelist, count = 1) => {
	const contract = await retrieveContract(contractAddress)

	const leafNodes = whitelist.map(addr => keccak256(addr));
	const claimingAddress = await leafNodes.find(node =>  compare(keccak256(account), node))

	const merkleTree = new MerkleTree(leafNodes,keccak256, { sortPairs: true });

	const hexProof = merkleTree.getHexProof(claimingAddress)


	contract.methods.presaleMint(count, hexProof).send({ from: account, value: price * count }, err => {
		if (err) {
			alert(err.message)
		}
	})
	.on('error', err => {
		alert(err.message)
	})
	.once("confirmation", () => {
		alert('NFT successfully minted.')
	})
}


// Minting function
const contractAddress = "0x614F28e4C336E744272C57D22e29d3cf61251D97";
const onMint = async (count) => {
	const contract = await retrieveContract(contractAddress);

	// States
	const { 
		open,
		presaleOpen,
		cost,
	} = await getPublicContractVariables(contractAddress)
	let isPublicSaleOpen = open;
	let isPresaleOpen = presaleOpen;

	// Check if public sale or presale is open
	if (!isPublicSaleOpen && !isPresaleOpen) {
		throw new Error("Public sale and Presale is not open");
	}

	// Public sale mint
	if (false) {
		contract.methods
			.mint(count)
			.send({ from: account, value: cost * count }, (err) => {
				if (err) {
					alert(err.message);
				} 
			})
			.on("error", (err) => {
				alert(err.message);
			})
			.once("confirmation", () => {
				alert("NFT successfully minted.");
			});
	}

	// Presale mint
	else if (true) {
		const whitelist = await fetchWhitelist(contractAddress)
		console.log(whitelist.data.getContract.nftCollection.whitelist)

		await presaleMint(
			cost,
			contractAddress,
			whitelist.data.getContract.nftCollection.whitelist,
			mintCount
		);
	}
};

// Load Ethereum in browser
const loadWeb3 = async () => {
	window.web3 = new Web3(window.ethereum);
	window.ethereum.enable();
	window.ethereum.on("accountsChanged", (accounts) => (account = accounts[0]));

	// Set account
	const accounts = await web3.eth.getAccounts();
	account = accounts[0];
};

// Initialization
const init = async () => {
	// Load web3 & grab states
	await loadWeb3();
	const {
		maxPerMint,
		costInEth,
		supply,
		totalSupply
	} = await getPublicContractVariables(contractAddress)

	// Fetch button
	let elements = document.getElementsByTagName("ambition-button");
	console.log(elements[0]);
	const ambitionButton = elements[0];

	// Base button styles
	const button = document.createElement("button")
	button.style.padding = "15px 25px";
	button.style.background = "rgb(0, 106, 255)";
	button.textContent = `Mint ${costInEth} ETH`;
	button.style.cursor = "pointer"
	button.style.borderRadius = "4px"
	button.style.color = "white"
	button.style.fontFamily = "sans-serif"
	button.style.border = 0;
	button.addEventListener("click", async () => await onMint(mintCount));

	// Choose how many to mint
	const input = document.createElement("input")
	input.type = "number"
	input.value = INITIAL_MINT_COUNT
	input.min = 1
	input.max = maxPerMint
	input.style.height = "48px"
	input.style.width = "30px"
	input.addEventListener("change", e => {
		mintCount = e.target.value
	})

	// Number of mints
	const div = document.createElement("div")
	div.textContent = supply + "/" + totalSupply
	div.style.fontFamily = "sans-serif"


	// Add sub-elements to main element
	ambitionButton.append(button)
	ambitionButton.append(input)
	ambitionButton.append(div)




	// Get meta tag
	const asd = document.head.querySelector(
		"[property~=ambition-contract-abi][content]"
	).content;
};
init();
