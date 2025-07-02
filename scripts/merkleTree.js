const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const hre = require("hardhat");

async function main() {
  
  let addresses = ["","","","",""]
 
  const buf2hex = (x) => "0x" + x.toString("hex");
  const leaves = addresses.map((x) => keccak256(x));
  const tree = new MerkleTree(leaves, keccak256, { sortPairs: true }); 
  const root = "0x" + tree.getRoot().toString("hex");
  const leaf = keccak256(addresses[3]).toString("hex"); 
  const proof = tree.getProof(leaf).map((x) => buf2hex(x.data));

  let merkTee =  keccak256("");
   
  console.log("proofsss",tree.getHexProof(merkTee))
  console.log(`Root - ${root}`); 
  console.log(`leaf - ${leaf}`);
  console.log(`proof - ${proof}`);


  

 
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});