const dogImage = document.getElementById("dog-image");
const newDogBtn = document.getElementById("new-dog-btn");
const errorMessage = document.getElementById("error-message");

async function fetchDogImage() {
  try {
    errorMessage.textContent = ""; // Clear previous error
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    dogImage.src = data.message;
  } catch (error) {
    console.error("Fetch error:", error);
    errorMessage.textContent = "Sorry, something went wrong. Please try again.";
  }
}

// Load a dog image when page loads
fetchDogImage();

// Load a new image when button is clicked
newDogBtn.addEventListener("click", fetchDogImage);