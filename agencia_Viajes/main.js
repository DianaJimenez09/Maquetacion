let infos = [];

function info() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let departure = document.getElementById("departure");
  let destination = document.getElementById("destination");
  let departure_date = document.getElementById("departure_date");
  let duration = document.getElementById("duration");
  let guest = document.getElementById("guest");

  let information = {
    name_information: name.value,
    email_information: email.value,
    departure_information: departure.value,
    destination_information: destination.value,
    departure_date_information: departure_date.value,
    duration_information: duration.value,
    guest_information: guest.value,
  };

  infos.push(information);
  console.log(information);
  console.log(infos);
}

function filter() {
  let filtrado = document.getElementById("formulario");

  for (let i = 0; i < infos.length; i++) {
    let destination_A = infos[i].destination_information;
    let destinationLowerCase = destination_A.toLowerCase();

    if (
      destinationLowerCase === "canary island" ||
      destinationLowerCase === "galia" ||
      destinationLowerCase === "mallorca"
    ) {
      filtrado.innerHTML += `<tr class="head">
            <th>Name: ${infos[i].name_information}</th>
            <th>Email: ${infos[i].email_information}</th>
            <th>Departure: ${infos[i].departure_information}</th>
            <th>Destination: ${infos[i].destination_information}</th>
            <th>Departure date: ${infos[i].departure_date_information}</th>
            <th>Duration: ${infos[i].departure_date_information}</th>
            <th>Guest: ${infos[i].guest_information}</th>
            </tr>
            `;
    }
  }
}
