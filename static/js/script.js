// Define the URL of the JSON file
const jsonFileUrl = '/static/js/data.json';

// Function to fetch the JSON data
function fetchProjectData() {
  fetch(jsonFileUrl)
    .then((response) => response.json())
    .then((data) => {
      // Check if the data is an object and not an array
      if (typeof data === 'object') {
        // Call a function to display the project data on the page
        displayProjectData(data);
      } else {
        console.error('Invalid data format. Expected an object.');
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

// Function to display project data on the page
function displayProjectData(data) {
  const projectList = document.getElementById('project-list');
  const projectTemplate = document.getElementById('project-template').cloneNode(true);

  // Populate the project template with data
  projectTemplate.style.display = 'block';
  projectTemplate.querySelector('h3').textContent = data.projectName;
  projectTemplate.querySelector('p:nth-child(2)').textContent += data.projectDescription;
  projectTemplate.querySelector('p:nth-child(3)').textContent += data.projectTechStack;
  projectTemplate.querySelector('p:nth-child(4)').textContent += data.userName;
  projectTemplate.querySelector('p:nth-child(5)').textContent += data.userEmail;
  projectTemplate.querySelector('p:nth-child(6)').textContent += data.collegeName;
  projectTemplate.querySelector('p:nth-child(7)').textContent += data.state;
  projectTemplate.querySelector('p:nth-child(8)').textContent += data.city;

  // Create a container for the images
  const imgContainer = projectTemplate.querySelector('.image-container');

  // Create image elements for the Imgur links
  data.imgurLinks.forEach((link) => {
    const img = document.createElement('img');
    img.setAttribute('src', link);

    // Set maximum width and height for the images
    img.style.maxWidth = '300px'; // You can adjust the value as needed
    img.style.maxHeight = '200px'; // You can adjust the value as needed

    imgContainer.appendChild(img);
  });

  // Add the populated project template to the project list
  projectList.appendChild(projectTemplate);
}

// Call the fetchProjectData function when the page loads
window.addEventListener('load', fetchProjectData);
