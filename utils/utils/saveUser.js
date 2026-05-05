import fs from 'fs';
import path from 'path';

const filePath = path.resolve('utils/data/users.json');

export function saveUser(user) {
  let users = [];

  if (fs.existsSync(filePath)) {
    users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }

  users.push(user);

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}
