const subjectsData = {
    commercials: ["Basic Accounting", "Business/Commerce"],
    arts: ["English", "Shona language", "History", "Family and Religious Studies"],
    scientific: ["Combined Science", "Mathematics"],
  };
  
  const allSubjects = ["English", "Combined Science", "Mathematics", "Family and Religious Studies", "Basic Accounting", "Shona language", "Business/Commerce", "History"];
  
  function displaySubjects() {
    const field = document.querySelector('input[name="fieldOfStudy"]:checked').value;
    const subjectsList = document.getElementById("subjects");
    subjectsList.innerHTML = ""; // Clear previous subjects
  
    let relevantSubjects = subjectsData[field] || [];
  
    relevantSubjects.forEach(subject => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = subject;
        checkbox.name = "subject";
        checkbox.value = subject;
        li.appendChild(checkbox);
        const label = document.createElement("label");
        label.htmlFor = subject;
        label.textContent = subject;
        li.appendChild(label);
        subjectsList.appendChild(li);
      });
  
    document.getElementById("subjectList").style.display = "block";
  }
  
  // Event listener to show subjects when a radio button is clicked
  const radioButtons = document.querySelectorAll('input[name="fieldOfStudy"]');
  radioButtons.forEach(radio => {
      radio.addEventListener('change', displaySubjects);
  });
  
  function register() {
      let selectedSubjects = [];
      const checkboxes = document.querySelectorAll('input[name="subject"]:checked');
      checkboxes.forEach(checkbox => {
          selectedSubjects.push(checkbox.value);
      });
      if (selectedSubjects.length === 0 && document.getElementById("subjectList").style.display === "block"){
          alert("Please select at least one subject.");
          return;
      }
      if(document.getElementById("firstName").value == "" || document.getElementById("lastName").value == "" || document.getElementById("age").value == ""){
          alert("Please fill in all required information.");
          return;
      }
      alert("Registration complete!");
      document.getElementById("infoForm").reset();
      document.getElementById("subjectList").style.display = "none";
  
  }