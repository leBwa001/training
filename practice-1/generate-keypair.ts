import "dotenv/config";
import { Keypair } from "@solana/web3.js";

const asArray = Uint8Array.from(JSON.parse(process.env["SECRET_KEY"])); // Виправлено Unit8Array на Uint8Array
const keypair = Keypair.fromSecretKey(asArray);

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);

