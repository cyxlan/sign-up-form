# Sign-up Form
Sign-up form for an online service.

[Live preview](https://cyxlan.github.io/sign-up-form/)

## Features
- Text fields for first name, last name, email, phone number, and password
- Prevents form submission until form validation passes:
  - Checks for valid email and phone number formats
  - Checks for matching password and password confirmation

## Applied skills
- Created an HTML form with text inputs and submit button
- Used regex pattern to check for 10 digit phone number
- Imported and defined a custom font using CSS `@font-face` rule
- Used `:invalid` and `:focus` pseudo classes to style form input states 

### Learnings
- Used `reportValidity()` to run form validation check after `preventDefault()`
- Used `setCustomValidity()` to manually mark form inputs as invalid