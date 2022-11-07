import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    //const card = await prisma.creditCards.create(
    //    {
    //        data:
    //        {
    //            CardNumberHash: "hashedpinhere",
    //            CreationDate: "10/10/10",
    //            ExpireDate: "10/10/10",
    //            CVV: "0",
    //            IsSwallowed: 0
    //        }
    //     })
    
    //const customer = await prisma.customers.findFirst({
    //    where: {
    //        Id: 2
    //    }
    //})

    //const account = await prisma.accounts.findFirst({
    //    where: {
    //        Id: 5
    //    }
    //})
    
    //console.log(account)
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })