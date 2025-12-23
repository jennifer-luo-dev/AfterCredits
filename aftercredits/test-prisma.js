const { PrismaClient } = require('@prisma/client');
(async function(){
  try {
    const p = new PrismaClient();
    console.log('instantiated');
    await p.$disconnect();
  } catch (e) {
    console.error('err', e);
    process.exit(1);
  }
})();
