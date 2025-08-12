const nameInput = document.getElementById("name");
    const titleInput = document.getElementById("title");
    const summaryInput = document.getElementById("summary");
    const contactInput = document.getElementById("contact");
    const educationInput = document.getElementById("education");
    const skillsInput = document.getElementById("skills");
    const interestsInput = document.getElementById("interests");
    const experienceInput = document.getElementById("experience");

    // Get the preview elements
    const previewName = document.getElementById("previewName");
    const previewTitle = document.getElementById("previewTitle");
    const previewSummary = document.getElementById("previewSummary");
    const previewContact = document.getElementById("previewContact");
    const previewEducation = document.getElementById("previewEducation");
    const previewSkills = document.getElementById("previewSkills");
    const previewInterests = document.getElementById("previewInterests");
    const previewExperience = document.getElementById("previewExperience");

    // Helper function to create a comma-separated list
    function createList(inputElement, previewElement, defaultText) {
      const itemsArray = inputElement.value.split(",").map(item => item.trim()).filter(item => item !== "");
      previewElement.innerHTML = "";
      if (itemsArray.length === 0) {
        // Optionally display a default text if the list is empty
        const defaultItem = document.createElement("li");
        defaultItem.textContent = defaultText;
        previewElement.appendChild(defaultItem);
      } else {
        itemsArray.forEach(item => {
          const li = document.createElement("li");
          li.className = "resume-list-item";
          li.textContent = item;
          previewElement.appendChild(li);
        });
      }
    }

    // Helper function for general text content
    function updateText(inputElement, previewElement, defaultText) {
      previewElement.textContent = inputElement.value || defaultText;
    }
    
    // Helper function for general text content with line breaks
    function updateTextWithBreaks(inputElement, previewElement, defaultText) {
      previewElement.innerHTML = inputElement.value.replace(/\n/g, '<br>') || defaultText;
    }

    // Add event listeners to update the preview in real-time
    nameInput.addEventListener("input", () => updateText(nameInput, previewName, "Your Name"));
    titleInput.addEventListener("input", () => updateText(titleInput, previewTitle, "Your Title"));
    summaryInput.addEventListener("input", () => updateText(summaryInput, previewSummary, "A short professional summary will appear here."));
    contactInput.addEventListener("input", () => createList(contactInput, previewContact, "Contact info will appear here."));
    educationInput.addEventListener("input", () => createList(educationInput, previewEducation, "Education will appear here."));
    skillsInput.addEventListener("input", () => createList(skillsInput, previewSkills, "Skills will be dynamically added here."));
    interestsInput.addEventListener("input", () => createList(interestsInput, previewInterests, "Interests will be dynamically added here."));
    experienceInput.addEventListener("input", () => createList(experienceInput, previewExperience, "Your professional experience will appear here. Use bullet points or paragraphs in the input field to format it."));

    // This function triggers the browser's native print dialog
    function downloadPDF() {
      window.print();
    }