# CashCompass

A simple and functional Full-Stack Expense Tracker built using HTML, CSS, JavaScript, and Flask. This project allows users to add, view, and manage expenses through a clean frontend interface connected to a backend API. It is designed as a beginner-friendly full-stack project that demonstrates frontend development, backend routing, API integration, and basic data handling.

---

## Project Overview
The Expense Tracker is a web-based application that helps users record and track their daily expenses. Users can enter expense details such as the expense title, amount, category, and date. The application then displays the recorded expenses in a structured format.

This project focuses on building a complete full-stack workflow where the frontend communicates with the Flask backend using API requests. It is suitable for academic submissions, beginner full-stack practice, and portfolio demonstration.
---

## Features
Add Expense

Users can add a new expense by entering required details such as:

Expense title
Expense amount
Expense category
Expense date
Optional description or notes

The entered data is sent from the frontend to the backend using JavaScript API calls.
---

## View Expenses

All added expenses are displayed on the frontend in a clear and organized format. Users can view their expense records and understand their spending pattern.

1. User enters expense details in the frontend form  
2. JavaScript sends data to backend using `fetch()`  
3. Flask API processes the request  
4. Data is stored in memory  
5. Backend returns JSON response  
6. Frontend updates UI dynamically  

---


##  Features

- Add new expenses  
- View all expenses  
- Delete expenses  
- Search/filter expenses by category  
- Dynamic UI updates without page reload  

---

## 🛠️ Tech Stack

Full-Stack Architecture

The project follows a simple full-stack structure:

Frontend handles user interaction and page design
Backend handles API routes and expense data processing
JavaScript connects the frontend and backend using fetch requests
Tech Stack
Frontend
HTML – Structure of the web pages
CSS – Styling and responsive layout
JavaScript – Dynamic behavior and API communication
Backend
Flask – Python web framework used to create backend routes and APIs
Python – Backend logic and server-side processing  

---

## How It Works
---User opens the Expense Tracker website.
User fills the expense form with details like:
Expense name
Amount
Category
Date
When the user clicks the Add Expense button, JavaScript collects the form data.
JavaScript sends this data to the Flask backend using fetch().
Flask receives the data and checks the expense details.
The expense is stored temporarily in memory.
Flask sends a JSON response back to the frontend.
JavaScript reads the response from Flask.
The new expense is added to the expense list on the page.
The page updates automatically without refreshing.
User can see all added expenses on the screen.



## Contributors

- Utkarsh  
- Akshat  
