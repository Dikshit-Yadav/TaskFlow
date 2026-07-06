# Build Log

## Day 1

### Date
2026-07-06

### Goal
Initialize the TaskFlow project.

### Completed
- Created project structure
- Initialized Git
- Added required folders
- Added CSS reset
- Added root variables
- Added jQuery and jQuery UI
- Added Font Awesome
- Created README
- Created Build Log

### Next
Build the Login Page UI.

---

## Feature 01 - Login Page UI & Client-Side Validation

### Goal
Build a modern login page with client-side validation using jQuery.

### Completed

#### UI
- Created responsive login page layout
- Added branding section
- Added login form
- Added social login buttons (UI only)
- Added register link
- Added forgot password link

#### Features
- Implemented show/hide password
- Added reusable email validation
- Added reusable password validation
- Added reusable UI helper functions
- Implemented live validation
- Added validation success/error states

#### Code Structure
- validation.js
    - isValidEmail()
    - isValidPassword()

- ui.js
    - showError()
    - showSuccess()
    - clearValidation()

- auth.js
    - Password toggle
    - Login form handling
    - Live validation

### Tested

✔ Password Toggle

✔ Email Validation

✔ Password Validation

✔ Live Validation

✔ Form Submission

### Status

Completed

### Next Feature

Register Page