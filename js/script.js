document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value || "Belum dipilih";

  const resultHTML = `
    <h3>Hasil Form:</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="width: 150px; font-weight: bold;">Nama</td>
        <td>: ${name}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Email</td>
        <td>: ${email}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">No. HP</td>
        <td>: ${phone}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Jenis Kelamin</td>
        <td>: ${gender}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Pesan</td>
        <td>: ${message}</td>
      </tr>
    </table>
  `;

  document.getElementById("formResult").innerHTML = resultHTML;
});
