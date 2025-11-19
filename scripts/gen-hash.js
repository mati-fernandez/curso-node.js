import bcrypt from 'bcryptjs';

const hash = bcrypt.hashSync('1234', 10);
console.log('Hash generado:', hash);
