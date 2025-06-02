let sidebar = document.querySelector(".sidebar ul");
console.log(sidebar);

sidebar.addEventListener("click", async function (e) {
  let section;
  if (e.target.tagName === "LI") {
    section = e.target.dataset.section;
    console.log(section);
  }

  try {
    const response = await fetch(`http://localhost:8800/${section}`);
    const data = await response.json();
    console.log(data);
    createTableFromData(data);
  } catch (error) {
    console.error("Eroare la fetch:", error);
  }
});

function createTableFromData(data) {
  const container = document.getElementById("table-container");
  container.innerHTML = ""; // Golește conținutul anterior

  if (!Array.isArray(data) || data.length === 0) {
    container.textContent = "Nu sunt date de afișat.";
    return;
  }

  // Capul tabelului
  const headers = Object.keys(data[0]);
  const thead = `
      <thead>
        <tr>
          ${headers.map((key) => `<th>${key}</th>`).join("")}
        </tr>
      </thead>
    `;

  // Corpul tabelului
  const tbody = `
      <tbody>
        ${data
          .map(
            (row) => `
            <tr>
              ${headers.map((key) => `<td>${row[key]}</td>`).join("")}
            </tr>
          `
          )
          .join("")}
      </tbody>
    `;

  // Final: inserăm totul într-un tabel
  container.innerHTML = `
      <table style="border-collapse: collapse; width: 100%;">
        ${thead}
        ${tbody}
      </table>
    `;
}

function createTableFromData(data) {
  const container = document.getElementById("table-container");
  container.innerHTML = ""; // Șterge tabelul anterior

  if (!Array.isArray(data) || data.length === 0) {
    container.textContent = "Nu sunt date de afișat.";
    return;
  }

  const table = document.createElement("table");
  table.border = "1";
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  // Generează capul de tabel din cheile primului obiect
  Object.keys(data[0]).forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    th.style.padding = "8px";
    th.style.backgroundColor = "#3498db";
    th.style.color = "white";
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  data.forEach((item) => {
    const row = document.createElement("tr");
    Object.values(item).forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      td.style.padding = "8px";
      td.style.border = "1px solid #ccc";
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  container.appendChild(table);
}
