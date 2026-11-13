const listaTaskuri = [
   {id: 1, nume: "Task 1", completat: true},
   {id: 2, nume: "Task 2", completat: true}
];
// 2. Funcția de Validare (Arrow Function)

const proceseazaTaskNou = (taskObj) => {
  if (taskObj.nume ===  undefined || taskObj.nume ==="") {
    console.log("Eroare: Task-ul trebuie să aibă un nume!");
  } else {
    listaTaskuri.push(taskObj);
    console.log("Task adăugat cu succes!");
  } 
}
for(let i = 0; i < listaTaskuri.length; i++) {
  console.log(+listaTaskuri[i].nume);
}
// 3. Testează funcția apelând-o cu un task invalid și unul valid
proceseazaTaskNou({ id: 3, nume: "", completat: false }); // Task invalid
proceseazaTaskNou({ id: 4, nume: "Task 4", completat: false }); // Task valid

// ============================================================
// Sesiunea 4: JS DOM Manipulation (Task Tracker)
// ============================================================
// Cerințe Tehnice:
// 1. Selectare elemente DOM: formular (#add-task-form), input (#task-name), tbody.
// 2. Ascultător de eveniment 'submit' pe formular cu preventDefault().
// 3. Creare dinamică rând nou (document.createElement('tr')).
// 4. Structura rândului: celule <td> cu numele task-ului și buton cu clasa 'delete-row'.
// 5. Inserare în DOM folosind appendChild() sau append().
// 6. Resetare valoare câmp input (input.value = '').
// 7. Ștergere dinamică din DOM cu .remove() la click pe butonul 'delete-row'.
// ============================================================
/ 1. Selectare elemente DOM
const form = document.querySelector('#add-task-form');
const input = document.getElementById('task-name');
const tbody = document.querySelector('tbody');

const butonSubmit = document.querySelector('[data-testid="submit-task-btn"]');
// Setăm starea inițială: când deschidem pagina, câmpul e gol, deci dezactivăm butonul
butonSubmit.disabled = true;
// Ascultăm la fiecare literă pe care utilizatorul o tastează în input
input.addEventListener('input', () => {
  // Dacă lungimea textului este 0 (adică e gol), disable rămâne true
  if (input.value.length === 0) {
    butonSubmit.disabled = true;
  } else {
    // Altfel, dacă a scris ceva, activăm butonul
    butonSubmit.disabled = false;
  }
})
// 2. Ascultător eveniment 'submit' și adăugare dinamică în tabel
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // 3. Creare dinamică rând nou (document.createElement('tr')).
  const newRow = document.createElement('tr');
  // 4. Structura rândului: celule <td> cu numele task-ului și buton cu clasa 'delete-row'.
  newRow.innerHTML = '<td>#1003</td><td>' + input.value + '</td><td><button class="delete-row">Sterge</button></td>';
  // 5. InseralistaTaskuri.appendChild(taskNou);
  tbody.appendChild(newRow);
  // 6. Resetare valoare câmp input (input.value = '').
  input.value = '';
  butonSubmit.disabled = true;
});
document.addEventListener('click', function (e) {
  // Verificăm dacă elementul apăsat are clasa 'delete-row'
  if (e.target.classList.contains('delete-row')) {
    // Căutăm cel mai apropiat părinte de tip <tr> și îl ștergem cu .remove()
    e.target.closest('tr').remove();
  }
});