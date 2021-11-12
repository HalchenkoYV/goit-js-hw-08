import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");
let array = {};

form.addEventListener("input", throttle(handleInput, 500));
function handleInput(event) {
  const {
    elements: { email, message }
  } = form;
  console.log(form)
  array = { email:email.value, message:message.value}
  console.log(array);
  save("feedback-form-state", array);
}


const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};


document.addEventListener("DOMContentLoaded", ifLoadPage);

function ifLoadPage() {
  let itemInStorage = load("feedback-form-state");
  if (itemInStorage) {
    form.email.value = itemInStorage.email;
    form.message.value = itemInStorage.message;
  }
  else {
    return;
    }
  
}

form.addEventListener("submit", clickSent);
function clickSent(event) {
  const {
    elements: { email, message }
  } = event.currentTarget;
  event.preventDefault();
  form.reset();
  localStorage.removeItem("feedback-form-state");
  array = { email: email.value, message: message.value }
  console.log(array)
}





