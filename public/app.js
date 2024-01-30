// Your web app's Firebase configuration (replace with your own config object)
const firebaseConfig = {
  apiKey: "AIzaSyDGdItjt9FnL9GJZUz8jtDYuLFoxuPL9O8",
  authDomain: "testsimplefirebaseapp.firebaseapp.com",
  projectId: "testsimplefirebaseapp",
  storageBucket: "testsimplefirebaseapp.appspot.com",
  messagingSenderId: "489659057846",
  appId: "1:489659057846:web:b4beaa3e98a8519d6f8817",
  measurementId: "G-BEZLK11QZF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

async function fetchItems() {
  try {
      // Replace with your function's URL
      const response = await fetch('https://us-central1-testsimplefirebaseapp.cloudfunctions.net/fetchItems');
      const items = await response.json();
      displayItems(items);
  } catch (error) {
      console.error('Error fetching items:', error);
  }
}

function displayItems(items) {
  const container = document.getElementById('items');
  container.innerHTML = '';
  items.forEach(item => {
      const element = document.createElement('div');
      element.textContent = `Item ID: ${item.id}, Title: ${item.title}`;
      container.appendChild(element);
  });
}

// Fetch items on page load
fetchItems();
