// // Firebase SDKs
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// import { getAuth, onAuthStateChanged ,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
// import { getFirestore, collection, addDoc, serverTimestamp ,where, getDocs ,query} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// // Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyB2jBfVNPSaW30_m_L2IjpeuhwgZHaD9vw",
//   authDomain: "login-5780e.firebaseapp.com",
//   projectId: "login-5780e",
//   storageBucket: "login-5780e.appspot.com",
//   messagingSenderId: "124865439548",
//   appId: "1:124865439548:web:3b948db2f9aaa8362b6039",
//   measurementId: "G-6303N0L8E0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // DOM elements (safe get for login page)
// const email = document.getElementById("np");
// const password = document.getElementById("nm");
// const signup = document.getElementById("signup");
// const signin = document.getElementById("signin");
// const blogcard = document.getElementById("blogCardsSection");

// onAuthStateChanged(auth, async (user) => {
//   if (user) {
//     const q = query(collection(db, "blogPosts"), where("createdBy", "==", user.uid));
//     const querySnapshot = await getDocs(q);

//     querySnapshot.forEach((doc) => {
//       const data = doc.data();

//       const card = `
//         <article class="post-card">
//           <div class="post-image">
//             <img src="${data.imageUrl}" alt="Post Image" style="width: 100%; height: 100%; object-fit: cover;" />
//           </div>
//           <div class="post-content">
//             <span class="post-tag">My Blog</span>
//             <h3 class="post-title">${data.title}</h3>
//             <p class="post-excerpt">${data.description}</p>
//             <div class="post-meta">Posted on: ${new Date(data.createdAt?.seconds * 1000).toLocaleDateString()}</div>
//           </div>
//         </article>
//       `;

//       blogCardsSection.innerHTML += card;
//     });
//     window.location.href = "myBloPage.html";
//   } else {
//     window.location.href = "login_page - Copy.html"; // redirect if not logged in
//   }
// });

// if (signup && signin && email && password) {
//   // Signup functionality
//   signup.addEventListener("click", () => {
//     const email_value = email.value.trim();
//     const password_value = password.value.trim();

//     createUserWithEmailAndPassword(auth, email_value, password_value)
//       .then((userCredential) => {
//         alert("Signup successful!");
//       })
//       .catch((error) => {
//         alert("Signup failed: " + error.message);
//       });
//   });

//   // Signin functionality
//   signin.addEventListener("click", () => {
//     const email_value = email.value.trim();
//     const password_value = password.value.trim();

//     signInWithEmailAndPassword(auth, email_value, password_value)
//       .then((userCredential) => {
//         alert("Signin successful!");
//         // Redirect to admin page after login
//         window.location.href = "admin.html"; // Rename your admin page to admin.html if needed
//       })
//       .catch((error) => {
//         alert("Signin failed: " + error.message);
//       });
//   });
// }

// // Blog form submission (safe get for admin page)
// const blogForm = document.getElementById("newBlogPostForm");
// const titleInput = document.getElementById("newBlogTitle");
// const descInput = document.getElementById("newBlogContent");
// const imageUrlInput = document.getElementById("newBlogImageUrl");
// const imagePreviewBox = document.getElementById("newImagePreviewBox");

// if (blogForm && titleInput && descInput && imageUrlInput && imagePreviewBox) {
//   blogForm.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const title = titleInput.value.trim();
//     const description = descInput.value.trim();
//     const imageUrl = imageUrlInput.value.trim();

//     try {
//       const docRef = await addDoc(collection(db, "blogPosts"), {
//         title,
//         description,
//         imageUrl,
//         createdBy: auth.currentUser.uid,
//         createdAt: serverTimestamp(),
//       });

//       alert("Blog posted with ID: " + docRef.id);
//       blogForm.reset();

//       // Reset image preview
//       imagePreviewBox.innerHTML = `
//         <div class="placeholder-text">
//             <i class="fas fa-image placeholder-icon"></i>
//             <p>Image preview will appear here</p>
//         </div>
//       `;
//       imagePreviewBox.classList.remove("has-image");
//     } catch (error) {
//       alert("Error adding blog post: " + error.message);
//     }
//   });

//   // Image preview update
//   imageUrlInput.addEventListener("input", () => {
//     const url = imageUrlInput.value.trim();
//     if (url) {
//       imagePreviewBox.innerHTML = `<img src="${url}" alt="Preview Image" style="width: 100%; height: auto;">`;
//       imagePreviewBox.classList.add("has-image");
//     } else {
//       imagePreviewBox.innerHTML = `
//         <div class="placeholder-text">
//             <i class="fas fa-image placeholder-icon"></i>
//             <p>Image preview will appear here</p>
//         </div>
//       `;
//       imagePreviewBox.classList.remove("has-image");
//     }
//   });
// }



// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  where,
  getDocs,
  query,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyB2jBfVNPSaW30_m_L2IjpeuhwgZHaD9vw",
  authDomain: "login-5780e.firebaseapp.com",
  projectId: "login-5780e",
  storageBucket: "login-5780e.appspot.com",
  messagingSenderId: "124865439548",
  appId: "1:124865439548:web:3b948db2f9aaa8362b6039",
  measurementId: "G-6303N0L8E0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// DOM Elements
const email = document.getElementById("np");
const password = document.getElementById("nm");
const signup = document.getElementById("signup");
const signin = document.getElementById("signin");
const blogcard = document.getElementById("blogCardsSection"); // For myBlogPage
const blogForm = document.getElementById("newBlogPostForm");
const titleInput = document.getElementById("newBlogTitle");
const descInput = document.getElementById("newBlogContent");
const imageUrlInput = document.getElementById("newBlogImageUrl");
const imagePreviewBox = document.getElementById("newImagePreviewBox");

// ---------------------------
// Auth: Signup and Signin
// ---------------------------
if (signup && signin && email && password) {
  // Signup
  signup.addEventListener("click", () => {
    const email_value = email.value.trim();
    const password_value = password.value.trim();

    createUserWithEmailAndPassword(auth, email_value, password_value)
      .then(() => {
        alert("Signup successful!");
      })
      .catch((error) => {
        alert("Signup failed: " + error.message);
      });
  });

  // Signin
  signin.addEventListener("click", () => {
    const email_value = email.value.trim();
    const password_value = password.value.trim();

    signInWithEmailAndPassword(auth, email_value, password_value)
      .then(() => {
        alert("Signin successful!");
        window.location.href = "admin.html";
      })
      .catch((error) => {
        alert("Signin failed: " + error.message);
      });
  });
}

// ---------------------------
// Blog Form Submission (Admin Page)
// ---------------------------
if (blogForm && titleInput && descInput && imageUrlInput && imagePreviewBox) {
  blogForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const description = descInput.value.trim();
    const imageUrl = imageUrlInput.value.trim();

    try {
      const docRef = await addDoc(collection(db, "blogPosts"), {
        title,
        description,
        imageUrl,
        createdBy: auth.currentUser.uid,
        createdAt: serverTimestamp(),
        isDeleted: false
      });

      alert("Blog posted with ID: " + docRef.id);
      blogForm.reset();

      // Reset image preview
      imagePreviewBox.innerHTML = `
        <div class="placeholder-text">
            <i class="fas fa-image placeholder-icon"></i>
            <p>Image preview will appear here</p>
        </div>
      `;
      imagePreviewBox.classList.remove("has-image");
    } catch (error) {
      alert("Error adding blog post: " + error.message);
    }
  });

  // Live image preview
  imageUrlInput.addEventListener("input", () => {
    const url = imageUrlInput.value.trim();
    if (url) {
      imagePreviewBox.innerHTML = `<img src="${url}" alt="Preview Image" style="width: 100%; height: auto;">`;
      imagePreviewBox.classList.add("has-image");
    } else {
      imagePreviewBox.innerHTML = `
        <div class="placeholder-text">
            <i class="fas fa-image placeholder-icon"></i>
            <p>Image preview will appear here</p>
        </div>
      `;
      imagePreviewBox.classList.remove("has-image");
    }
  });
}

// ---------------------------
// Load Blog Posts (myBlogPage.html)
// ---------------------------
onAuthStateChanged(auth, async (user) => {
  if (user && blogcard) {
    const q = query(collection(db, "blogPosts"), where("createdBy", "==", user.uid));
    const querySnapshot = await getDocs(q);

    blogcard.innerHTML = ""; // Clear previous cards

    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();

      // Skip soft deleted blogs
      if (data.isDeleted) return;

      const card = document.createElement("article");
      card.classList.add("post-card");

      card.innerHTML = `
        <div class="post-image">
          <img src="${data.imageUrl}" alt="Post Image" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div class="post-content">
          <span class="post-tag">My Blog</span>
          <h3 class="post-title">${data.title}</h3>
          <p class="post-excerpt">${data.description}</p>
          <div class="post-meta">Posted on: ${new Date(data.createdAt?.seconds * 1000).toLocaleDateString()}</div>
        </div>
        <div class="post-actions">
          <button class="edit-btn"><i class="fas fa-pencil-alt"></i> Edit</button>
          <button class="delete-btn" data-id="${docSnap.id}"><i class="fas fa-trash-alt"></i> Delete</button>
        </div>
      `;

      blogcard.appendChild(card);
    });

    attachDeleteListeners(); // add delete functionality to buttons
  }
});

// ---------------------------
// Delete Blog Functionality
// ---------------------------
function attachDeleteListeners() {
  const deleteBtns = document.querySelectorAll(".delete-btn");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const postId = btn.getAttribute("data-id");
      const confirmed = confirm("Are you sure you want to delete this blog post?");
      if (!confirmed) return;

      try {
        const postRef = doc(db, "blogPosts", postId);
        await updateDoc(postRef, {
          isDeleted: true,
          deletedAt: serverTimestamp(),
        });

        alert("Blog post deleted.");
        window.location.reload();
      } catch (error) {
        alert("Error deleting post: " + error.message);
      }
    });
  });
}

// const shifttomtblg = document.getElementById("subb");
// window.location.href= "myBloPage.html";