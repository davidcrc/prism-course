import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: "test",
  //     email: "test2@gmail.co",
  //   },
  // });
  // console.log("User", newUser);
}

main();
