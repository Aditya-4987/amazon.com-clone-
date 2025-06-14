# Amazon.com Clone

A fully functional Amazon.com clone built with React, Firebase, and Material UI.  
This project demonstrates a modern e-commerce web app with authentication, shopping cart, and checkout features.

## Features

- User authentication (sign up, sign in, sign out) with Firebase Auth
- Add and remove products from the shopping basket
- View shopping cart and subtotal calculation
- Responsive UI with Material UI and custom CSS
- Real-time state management using React Context API

## Tech Stack

- [React](https://react.dev/)
- [Firebase](https://firebase.google.com/) (Authentication & Firestore)
- [React Router](https://reactrouter.com/) (Routing)
- [Material UI](https://mui.com/) (Icons & Components)
- [React Context API](https://react.dev/reference/react/useContext) (State Management)

## Getting Started

### Prerequisites

- Node.js (v16 or above recommended)
- npm

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Aditya-4987/amazon.com-clone-.git
   cd amazon.com-clone-
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure Firebase:**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Email/Password authentication.
   - Create a Firestore database.
   - Copy your Firebase config and replace it in [`src/Components/firebase.js`](src/Components/firebase.js).

4. **Start the development server:**
   ```sh
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
src/
  Components/
    Checkout.js
    CheckoutProduct.js
    firebase.js
    Header.js
    Home.js
    Login.js
    Product.js
    Subtotal.js
  App.js
  StateProvider.js
  reducer.js
  index.js
public/
  index.html
  ...
```

## Usage

- **Sign Up / Sign In:**  
  Create an account or log in using your email and password.
- **Browse Products:**  
  View products on the home page and add them to your basket.
- **Shopping Cart:**  
  Click the cart icon in the header to view or remove items from your basket.
- **Checkout:**  
  View the subtotal and proceed to checkout (demo only).

## License

This project is for educational purposes only and is not affiliated with Amazon.com.

---

Made with ❤️ using React and Firebase.
