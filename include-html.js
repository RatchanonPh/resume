function includeHTML() {
  const includeElements = document.querySelectorAll('[id^="include-"]');
  includeElements.forEach((el) => {
    const id = el.id.replace("include-", "");
    fetch(`pages/${id}.html`)
      .then((response) => {
        if (!response.ok) throw new Error(`Cannot load ${id}.html`);
        return response.text();
      })
      .then((data) => {
        el.innerHTML = data;
      })
      .catch((error) => console.error(error));
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);
