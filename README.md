# Welcome to the pokeAPI Project

## Applicant Information
- **Project:** Home Office - Technical Test
- **Reference:** EAC 303753
- **Applicant:** Redwan Ahmed


## What's this project all about? 🤔
Welcome to the pokeAPI Project! This project is all about connecting to the pokeAPI to provide information about Pokemon evolutions. Even if you're not a programmer, you can use this project to learn about your favorite Pokemon's evolution chain.


## How does it work? 💻
We've used some tools to make this project function:

- Node.js: A technology that helps this project run smoothly.
- Express.js: A tool that simplifies building web applications.
- Axios: A tool for making requests to the pokeAPI.
- Jest: A testing tool.
- Supertest: Another testing tool.


## How to Use It 📄
Using this project is easy! Just follow these steps:

### Step 1: Clone the Project
To get started, you need to download the project to your own computer. Don't worry, it's simple! Here's how:

1. **Open the Terminal** (on macOS) or **Command Prompt** (on Windows). You can search for it in your computer's search bar.
2. **Navigate to a Folder**: This is where you want to save the project. For example, you can navigate to your "Documents" folder by typing:
   ```
   cd Documents
   ```
3. **Clone the Project**: Copy the following line and paste it into the terminal, then press "Enter":
   ```
   git clone https://github.com/Redwan-Ahmed/pokeAPI.git
   ```
   This will download the project files to your computer.

### Step 2: Install Dependencies
If you're not sure what dependencies are, don't worry. Just follow these steps:
1. **Navigate to the Project Folder**: In the terminal, type:
   ```
   cd pokeAPI
   ```
2. **Install Dependencies**: Copy and paste this line, then press "Enter":
   ```
   npm install
   ```
   If that doesn't work, you can also try:
   ```
   npm install express axios jest supertest
   ```

### Step 3: Start the Server
Now, let's get the project running:
1. **Stay in the Project Folder**: Make sure your terminal is still in the `pokeAPI` folder.
2. **Start the Server**: Copy and paste this line, then press "Enter":
   ```
   node index.js
   ```

### Step 4: See Pokemon Evolutions
You're almost there! You can check out Pokemon evolutions in two ways:

1. **Using a Tool (like curl or Postman):**
   - Open your favorite tool.
   - Send a POST request to `http://localhost:3000/pokemon/butterfree`
   
2. **Using Your Browser:**
   - Open your web browser.
   - In the address bar, type: `http://localhost:3000/pokemon/butterfree`
     (You can replace 'butterfree' with any other Pokemon name you're curious about.)


## How to Test the Application 🧪
Wanna make sure everything works as it should? No problem!
1. Open the terminal once again.
2. Copy and paste this line:
   ```
   npm test
   ```
   Then press "Enter". This will run tests to ensure the project is working correctly.


Your feedback and suggestions for further enhancements are always welcome! 🙌 