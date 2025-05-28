interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 32,
  location: "Medellin",
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");

const headers: HTMLTableRowElement = document.createElement("tr");
["First Name", "Location"].forEach((heading) => {
  const th = document.createElement("th");
  th.textContent = heading;
  th.style.border = "1px solid black";
  th.style.padding = "8px";
  headers.appendChild(th);
});
table.appendChild(headers);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  firstNameCell.style.padding = "8px";

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "8px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
