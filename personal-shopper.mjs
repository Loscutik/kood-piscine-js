/*
Create a personal-shopper.mjs script that:

Takes a file as first argument, for example shopping-list.json
Takes one of these keywords as second argument:
create: 
    create the file
delete: 
    delete the file
add: add a new element to the list in the file.
    This command line must take a third argument which is the name of the new entry in your list. 
    If no third argument is passed, console must print this error: No elem specified..
    This command line could take a fourth argument which is the number of elements you want for this new entry.
    If there is no 4rth argument or the 4rth argument is NaN, 1 would be the value by default.
    If the entry already exists, it would add 1 or more to the original value.
    Using a negative number must behave as rm command.
rm: remove an element from the list in the file
    This command line must take a third argument which is the name of the entry to remove from the list.
    If no third argument is passed, console must print this error: No elem specified..
    If the entry does not exists, it does nothing.
    This command line could take a fourth argument which is the number of elements you want to delete from this entry.
    If there is no 4rth argument: it remove the entry.
    If the 4rth argument is NaN, nothing is removed and console must print this error Unexpected request: nothing has been removed.
    If the 4rth argument is a number, it will subtract this number from the original value (if the new value is <= 0, it will remove the entry).
    Using a negative number must behave as add command.
help: 
    print all the command lines available, with a description of it (specifications in the examples)
ls or no more arguments: 
    print the list in the console.
    Each line is formatted like this: - element (number) (- tzatziki pot (1))
    If the list is empty, this message should appear in console: Empty list..
If no keyword is passed as second argument, the helper should be printed in the console.
*/
import { readFile, writeFile, rm } from "fs/promises";

const filename = (!process.argv[2] || process.argv[2].length === 0) ? 'help' : process.argv[2];

const option = process.argv[3] ?? 'help';
const item = process.argv[4];
const numberString = process.argv[5];

async function createFile(filename) {
    await writeFile(filename, JSON.stringify({}));
}

async function removeFile(filename) {
    await rm(filename, { force: true });
}

async function printShopList(filename) {
    readFile(filename).then((content) => {
        try {
            let items = Object.entries(JSON.parse(content.toString()));
            if (items.length === 0) { console.log(`Empty list.`); return; }
            let listOutputForm = items.reduce((resStr, [name, quantity]) => `${resStr}- ${name} (${quantity})\n`, '');
            console.log(listOutputForm)
        } catch (e) { console.error('Invalide format of the list: ' + e.message); }
    }).catch(e => console.error('Cannot read list: ' + e.message));
}

async function addItem(filename, item, number) {
    readFile(filename)
        .then((content) => {
            if (content.length === 0) { return { [item]: number } }
            let items = JSON.parse(content);
            if (!items[item]) { items[item] = number; return items; }
            items[item] += number;
            return items;
        })
        .then((items) => { writeFile(filename, JSON.stringify(items)); })
        .catch((e) => { console.error('Invalide format of the list: ' + e.message); });
}


async function rmItem(filename, item, number) {
    readFile(filename)
        .then((content) => {
            let items = JSON.parse(content);
            if (!items[item]) return false;
            if (items[item] <= number) {
                delete items[item];
            } else {
                items[item] -= number;
            }
            return items;

        })
        .then((items) => {
            if (items !== false) {
                writeFile(filename, JSON.stringify(items));
            }
        })
        .catch((e) => { console.error('Invalide format of the list: ' + e.message); });
}

function printHelp() {
    console.log(
        ` Commands:
- create: takes a filename as argument and create it (should have '.json' extension specified)
- delete: takes a filename as argument and delete it
- ls: takes a filename as argument and print a list from the file in the console
- add: add a new element to the list in the file; takes a number as element's quantity, default: 1
- rm: decrease a given quantity of the element on the list in the file, if no quantity is specified it will remove the element from the list
- help: print this message`
    )
}
//----------------------------------------------------//
if (filename == 'help' || option == 'help') { printHelp(); process.exit(); }

let number = parseInt(numberString);
switch (option) {
    case 'create': await createFile(filename); break;
    case 'delete': await removeFile(filename); break;
    case 'ls': await printShopList(filename); break;
    case 'add':
        if (!item) { console.error('No elem specified.'); break; }
        if (!number) number = 1;
        if (number < 0) { await rmItem(filename, item, -number) } else { await addItem(filename, item, number); }
        break;
    case 'rm':
        if (!item) { console.error('No elem specified.'); break }
        if (numberString === undefined) { await rmItem(filename, item, Infinity); break; }
        if (isNaN(number)) { console.error('Unexpected request: nothing has been removed'); break }
        if (number < 0) { await addItem(filename, item, -number) } else { await rmItem(filename, item, number); }
        break;
    default: console.error('Invalid option: ' + option);
}
