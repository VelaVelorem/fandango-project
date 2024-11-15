# Fandango-Inspired Ticket Booking App 🎬

Welcome to my ticket booking app, inspired by the Fandango UI! This project recreates the ticket selection and seat booking experience, using **React**, **JavaScript**, **Bootstrap**, and **CSS** for responsive, dynamic interactivity. Starting from selecting ticket types to reserving seats, it’s designed to make the ticketing process intuitive and visually engaging.

---

Built as my initial project during my frontend bootcamp at Nucamp, this project allows users to interact with a familiar UI while showcasing my approach in single-page app design and state management. 

## Features Walkthrough

### Ticket Selection Page 🎟️
1. **Select Your Tickets**: 
   - Adjust the ticket quantity with increment and decrement buttons, capped at a maximum of 25 tickets.
   - Different ticket types, like child, adult, and senior, are available with unique pricing.  

2. **Proceed to Seat Selection**:
   - Once your tickets are selected, the previously disabled "Next" button activates.
   - Clicking "Next" opens a login modal. Dismiss the modal by clicking outside it, or complete login to proceed.

3. **Login Modal**:
   - To move forward, enter a username and password that meet validation criteria.
   - If your input doesn’t meet requirements, helpful prompts guide you toward a valid login.

### Seat Booking Page 🪑
1. **Movie and Seating Details**:
   - After login, you’ll see the movie title and viewing details at the top of the page.
   - Hover over seats to see their numbers via tooltips.

2. **Select Seats**:
   - Pick seats based on your purchased ticket quantity—attempting to select more seats will alert you that you've reached your cap.
   - Selected seats dynamically display in the seat confirmation button below.

3. **Return to Ticket Selection**:
   - Click the left arrow in the top left to return to the ticket selection page if needed.

### Contact Page 📬
- Accessible by clicking “Coded by Haneefah Witherspoon” in the footer.
- View a simple, animated contact page with links to social profiles.

## Technology and Methods Used

### Libraries & Frameworks
- **React**: For building a responsive, single-page app with reusable components.
- **Bootstrap**: For a consistent, mobile-friendly UI that’s easy to style.

### Key React Methods
1. **State Management**:
   - *useState*: Handled ticket quantity, seat selections, and login input.
   - *useEffect*: Managed side effects like enabling/disabling the "Next" button based on ticket count.

2. **Routing & Navigation**:
   - *BrowserRouter*: Manged routes between the ticket selection, seat booking, and contact pages.
   - *useNavigate*: For seamless navigation between pages based on user interactions.

3. **Shared State**:
   - *useContext*: Simplified passing data between components without running into an issue with prop drilling, especially useful as my code got more complicated with more components needing shared state (e.g., ticket quantity and selected seats).

### Future Features 🚀
- **Billing Page**: To calculate total ticket costs and confirm booking(s).
- **Improved Accessibility**: Tooltips, keyboard navigation, and ARIA labels to make the app more accessible.

