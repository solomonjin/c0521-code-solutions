const fs = require('fs');
const data = require('./data.json');
const input = process.argv.slice(2);
const command = input[0];

const readNotes = data => {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
};

const saveData = data => {
  const dataJSON = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', dataJSON, err => { if (err) throw err; });
};

const checkID = id => {
  if (!(id in data.notes)) {
    console.error('Not a valid ID');
    process.exit(1);
  }
};
if (command) {
  if (command.toLowerCase() === 'read') {
    readNotes(data);
  } else if (command.toLowerCase() === 'create') {
    const newEntry = input[1];
    data.notes[data.nextId] = newEntry;
    data.nextId++;
  } else if (command.toLowerCase() === 'delete') {
    const id = input[1];
    checkID(id);
    delete data.notes[id];
  } else if (command.toLowerCase() === 'update') {
    const [, id, newEntry] = input;
    checkID(id);
    data.notes[id] = newEntry;
  }
} else {
  console.error('No command inputted');
  process.exit(1);
}

saveData(data);
