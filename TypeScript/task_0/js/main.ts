export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

export const student1: Student = {
  firstName: "Alice",
  lastName: "Dupont",
  age: 20,
  location: "Paris",
};

export const student2: Student = {
  firstName: "Bob",
  lastName: "Martin",
  age: 22,
  location: "Lyon",
};

export const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const headerRow: HTMLTableRowElement = document.createElement("tr");
["First name", "Location"].forEach((text) => {
  const th = document.createElement("th");
  th.textContent = text;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");
  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
  row.append(firstNameCell, locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
