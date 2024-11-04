const bcrypt = require("bcrypt");

async function generateHash() {
  const password = "LENDsqr3215?"; // Replace with the actual password you want to hash
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed password:", hashedPassword);
}

generateHash().catch(console.error);

