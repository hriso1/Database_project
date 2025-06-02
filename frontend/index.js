let sidebar = document.querySelector(".sidebar ul");
console.log(sidebar);

sidebar.addEventListener("click", async function (e) {
  let section;
  if (e.target.tagName === "LI") {
    section = e.target.dataset.section;
    console.log(section);
  }

  try {
    const response = await fetch(`http://localhost:8000/${section}`);
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
