async function getusers() {
  const data = await fetch(
    "https://61bc1cd7d8542f00178245ae.mockapi.io/users",
    { method: "GET" }
  );
  const users = await data.json();
  console.log(users);
  users.innerHTML = "";
  users.forEach((users) => createusers(users));
}

function createusers({ avatar, name, createdAt, id }) {
  const users = document.createElement("div");
  users.setAttribute("class", "container");
  users.innerHTML = ` <div class="img_details">
  <img id="currentPhoto" src="${avatar}"  alt="" width="100" height="120">
  </div>
  <div class="details">
  <h1>${name}</h1>
  <p>${new Date(createdAt).toDateString()}</p>
  <button onclick="deleteitem(${id})">delete</button>
  </div>`;

  document.body.append(users);
}
getusers();

async function deleteitem(id) {
  const data = await fetch(
    `https://61bc1cd7d8542f00178245ae.mockapi.io/users/${id}`,
    { method: "DELETE" }
  );
  const users = await data.json();
  console.log(users);
  getusers();
}
