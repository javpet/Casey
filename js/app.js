const tabs = document.querySelectorAll(".tab");
const textArea = document.querySelector("textarea");
const copyButton = document.querySelector("#copy-button");
let outputText = "";

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    event.target.classList.add("active");
    let inputText = getTextFromInput();

    // Identify which tab was clicked by index
    let tabValue = getTabValue(event);

    if (tabValue === "0") {
      // If Tab 0 go sentence case
      outputText = handleSentenceCase(inputText);
    } else if (tabValue === "1") {
      outputText = handleAllcapsCase(inputText);
    } else {
      // If Tab 2 title it
      outputText = handleTitleCase(inputText);
    }

    // Change output in textarea
    changeTextAreaText(outputText);
  });
});

copyButton.addEventListener("click", function () {
  copyToClipboard();
  //   We need to set timeout to change back the text to copy
  copyButton.textContent = "Yay! Copied to clipboard!";
  //
  setTimeout(() => {
    copyButton.textContent = "Copy text";
  }, "3000");
});

textArea.addEventListener("change", function () {
  copyButton.style.display = "block";
});

function getTabValue(event) {
  let indexSelected = event.target.dataset.index;
  return indexSelected;
}

function handleSentenceCase(text) {
  newText = text.charAt(0).toUpperCase() + text.slice(1);
  return newText;
}

function handleAllcapsCase(text) {
  newText = text.toUpperCase();
  return newText;
}

function handleTitleCase(text) {
  const arr = text.split(" ");

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  value = arr.join(" ");
  return value;
}

function getTextFromInput() {
  let value = textArea.value;
  value = value.toLocaleLowerCase();
  return value;
}

// Function to change textarea text
function changeTextAreaText(text) {
  textArea.value = text;
}

// Function to copy out text from text area
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(outputText);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

// Handle error case when text are is empty
