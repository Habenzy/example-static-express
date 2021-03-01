let user = document.location.pathname;
let userId = user.slice(1);

fetch("/users")
  .then((res) => res.json())
  .then((userList) => {
    console.log(userList)
    if (userList.includes(userId)) {
      fetch(`/users/${userId}`)
        .then((res) => res.json())
        .then((userObj) => {
          console.log(userObj)
          document.getElementById("display").innerHTML = `<h1>${userObj.name}</h1><h3>${userObj.role}</h3>`;
        });
    } else {
      document.getElementById("display").textContent = "User not found";
    }
  });
