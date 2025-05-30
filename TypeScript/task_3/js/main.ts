//At the top of the file create a triple slash directive that includes all the dependencies from crud.d.ts
/// <reference path="./crud.d.ts" />

//Import the rowID type and rowElement from interface.ts
import { RowID, RowElement } from "./interface";
//Import everything from crud.js as CRUD
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`New Row ID: ${newRowID}`);

const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row:`, updatedRow);
CRUD.deleteRow(newRowID);
console.log(`Deleted row ID:`, newRowID);
