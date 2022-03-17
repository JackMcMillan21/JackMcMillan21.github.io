// Modal
let modal = document.getElementById("modal");
let profilePicture = document.getElementById("profile-picture");

profilePicture.onclick = function () {
  modal.style.display = "flex";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Uploadinging pictures

const post = document.getElementById("post-button");
const userFeed = document.getElementById("grid-container");
const textArea = document.getElementById("text-area");
const imageInput = document.getElementById("image-input");
const errorText = document.getElementById('error-text')
let uploadImage = "";
const upload = document.getElementById('upload');

post.addEventListener("click", () => {
  let textAreaValue = textArea.value;
  if(textAreaValue.trim() == "" && imageInput.files.length < 1){
    errorText.innerText = "Input field can not be blank";
  }
  else{
    divCreation(textAreaValue);
    textArea.value = '';
    errorText.innerText = "";
    imageInput.value = "";
    upload.innerText = "Upload";
  }
});

const divCreation = (textValue) => {
  let userPost = document.createElement("div");
  userPost.classList.add("feed-div")
  userFeed.prepend(userPost);
  let lastFile = imageInput.files[imageInput.files.length-1];



  if(imageInput.files.length > 0){
    userPost.innerHTML = `
    <div class="row">
    <div class="background-photo"></div>
    <p class="user-name">Jack McMillan</p>
    </div>
    <p class="text-value"> ${textValue} </p>
    <img src="${URL.createObjectURL(lastFile)}">`;
  }else{
    userPost.innerHTML = `
    <div class="row">
    <div class="background-photo"></div>
    <p class="user-name">Jack McMillan</p>
    </div>
    <p class="text-value"> ${textValue} </p>`
  }
};

imageInput.addEventListener('change', () =>{
  let fileName = imageInput.files[0].name.trim();
  upload.innerText = fileName;
})

// Modal info
const infoContainer = document.getElementById('bottom');


class User{
  constructor(name, id, email){
    this._name = name;
    this._id = id;
    this._email = email;
  }

  set name(value) {this._name = value;}
  get name() {return this._name;}

  set id(value) {this._id = value;}
  get id() {return this._id;}

  set email(value) {this._email = value;}
  get email() {return this._email;}
}

class Premium extends User{
  constructor(name, id, email, pages, groups){
    super(name, id, email);
    this._pages = pages;
    this._groups = groups;
  }

  set pages(value) {this._pages = value;}
  get pages() {return this._pages;}
 
  set groups(value) {this._groups = value;}
  get groups() {return this._groups;}

  getInfo(){
    return `<h2 class="modal-name">${this.name}</h2>
            <p>Id: #${this.id}</p>
            <p>Email: ${this.email}</p>
            <p>Pages: ${this.pages}</p>
            <p>Groups: ${this.groups}</p>`
  }
}

const premiumUser = new Premium("Jack McMillan", 45392, "Jackmcmillan@gmail.com", 10, 45);

infoContainer.innerHTML = premiumUser.getInfo();
