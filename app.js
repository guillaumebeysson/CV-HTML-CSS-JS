// Inverser le background left et right
const colorbannerLeft = document.querySelector(".bannerLeft");
const colorbannerRight = document.querySelector(".bannerRight");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    colorbannerLeft.classList.add("scroll");
    colorbannerRight.classList.add("scroll");
  } else {
    colorbannerLeft.classList.remove("scroll");
    colorbannerRight.classList.remove("scroll");
  }
});

// Inverser les couleurs des h1 h2 h3
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("h1").classList.add("scroll");
    document.getElementById("h2").classList.add("scroll");
    document.getElementById("h3LeftContact").classList.add("scroll");
    document.getElementById("h3LeftFormation").classList.add("scroll");
    document.getElementById("h3LeftLangues").classList.add("scroll");
    document.getElementById("h3RightProfil").classList.add("scroll");
    document.getElementById("h3RightExperiences").classList.add("scroll");
    document.getElementById("h3RightLangages").classList.add("scroll");
    document.getElementById("h3RightQualites").classList.add("scroll");
    document.getElementById("h3RightInterets").classList.add("scroll");
    document.getElementById("linkImage").classList.add("scroll");
  } else {
    document.getElementById("h1").classList.remove("scroll");
    document.getElementById("h2").classList.remove("scroll");
    document.getElementById("h3LeftContact").classList.remove("scroll");
    document.getElementById("h3LeftFormation").classList.remove("scroll");
    document.getElementById("h3LeftLangues").classList.remove("scroll");
    document.getElementById("h3RightProfil").classList.remove("scroll");
    document.getElementById("h3RightExperiences").classList.remove("scroll");
    document.getElementById("h3RightLangages").classList.remove("scroll");
    document.getElementById("h3RightQualites").classList.remove("scroll");
    document.getElementById("h3RightInterets").classList.remove("scroll");
    document.getElementById("linkImage").classList.remove("scroll");
  }
}

/*********************** MODAL *********************** */
// var myModal = document.getElementById("myModal");
// var myInput = document.getElementById("myInput");

// myModal.addEventListener("shown.bs.modal", function () {
//   myInput.focus();
// });

let myForm = document.getElementById("myForm");
let btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", function (e) {
  // let annee = document.getElementById("annee");
  // let metier = document.getElementById("metier");
  // let titre = document.getElementById("titre");
  // let description = document.getElementById("description");
  let regexNumber = new RegExp("[0-9]");

  e.preventDefault(e);

  console.log("tata");

  let annee = document.getElementById("annee").value;
  console.log(annee);
  let metier = document.getElementById("metier").value;
  console.log(metier);
  let titre = document.getElementById("titre").value;
  console.log(titre);
  let description = document.getElementById("description").value;
  console.log(description);

  // if (annee2 == "") {
  //   let anneeError = document.getElementById("anneeError");
  //   anneeError.innerHTML = "Le champ est requis.";
  //   btnSubmit.style.display = "none";
  //   e.preventDefault();
  // } else if (regexNumber.test(annee2) == false) {
  //   let anneeError = document.getElementById("anneeError");
  //   anneeError.innerHTML = "L'année doit comporter que des chiffres";
  //   e.preventDefault();
  // }
  // if (metier2 == "") {
  //   let metierError = document.getElementById("metierError");
  //   metierError.innerHTML = "Le champ est requis.";
  //   e.preventDefault();
  // }
  // if (titre2 == "") {
  //   let titreError = document.getElementById("titreError");
  //   titreError.innerHTML = "Le champ est requis.";
  //   e.preventDefault();
  // }
  // if (description2 == "") {
  //   let descriptionError = document.getElementById("descriptionError");
  //   descriptionError.innerHTML = "Le champ est requis.";
  //   e.preventDefault();
  // }

  let addExperience = document.getElementById("addExperience");

  console.log("experience", addExperience);

  addExperience.innerHTML = `<div class="blockExperience">
                        <div class="blockExperienceLeft">
                        <p>
    ${annee}  </p>
                        <p>
    ${metier} </p>
                    </div>
                    <div class="blockExperienceRight">
                        <p>
    ${titre}</p>
                        <p>
    ${description}
                        </p>
                    </div>
                  </div>`;
});

/*************************** CONNEXION *****************************/

let btnPlus = document.getElementById("btnPlus");
let modalExperience = document.querySelector(".modal-add-experience");
let modalConnexion = document.querySelector(".modal-connexion");
let btnValidateConnexion = document.getElementById("btnValidateConnexion");

const mdp = "lol";

btnPlus.addEventListener("click", function (e) {
  e.preventDefault();
  modalExperience.style.display = "none";

  btnValidateConnexion.addEventListener("click", function (e) {
    let input = document.getElementById("inputConnexion").value;
    e.preventDefault();
    if (input == mdp) {
      console.log(input);
      modalConnexion.style.display = "none";
      modalExperience.style.display = "block";
    } else {
      console.log(input);
      let modalError = document.getElementById("modalError");
      modalError.innerHTML = "Mot de passe incorrect !";
    }
  });
});

/**************************** EYE PASSWORD ************************************ */
const togglePassword = document.querySelector("#togglePassword");

const password = document.querySelector("#inputConnexion");

togglePassword.addEventListener("click", () => {
  // Toggle the type attribute using
  // getAttribure() method
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";

  password.setAttribute("type", type);

  // Toggle the eye and bi-eye icon
  this.classList.toggle("fa-eye");
});
