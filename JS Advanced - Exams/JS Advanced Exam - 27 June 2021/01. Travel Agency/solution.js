window.addEventListener('load', solution);

function solution() {
  const fullName = document.getElementById('fname');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const address = document.getElementById('address');
  const code = document.getElementById('code');
  const preview = document.getElementById('infoPreview');
  const block = document.getElementById('block');

  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');

  submitBtn.addEventListener('click', submit);

  function submit(e) {
    e.preventDefault();
    const fullNameValue = fullName.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const addressValue = address.value;
    const codeValue = code.value;

    if (!fullNameValue || !emailValue) {
      throw new Error('There are blank fields!');
    }

    genElement('li', preview, `Full Name: ${fullNameValue}`);
    genElement('li', preview, `Email: ${emailValue}`);
    genElement('li', preview, `Phone Number: ${phoneValue}`);
    genElement('li', preview, `Address: ${addressValue}`);
    genElement('li', preview, `Postal Code: ${codeValue}`);

    [fullName.value, email.value, phone.value, address.value, code.value] = ['', '', '', '', ''];

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    editBtn.addEventListener('click', edit);
    continueBtn.addEventListener('click', complete);

    function edit() {
      Array.from(preview.children).forEach(li => li.remove());
      fullName.value = fullName;
      email.value = emailValue;
      phone.value = phoneValue;
      address.value = addressValue;
      code.value = codeValue;

      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;
    }

    function complete() {
      block.innerHTML = '';
      genElement('h3',block,'Thank you for your reservation!');
    }

  }
  function genElement(type, parent, textContent) {
    let element = document.createElement(type);
    if (textContent) {
      element.textContent = textContent;
    }
    parent.appendChild(element);
    return element;
  }
}