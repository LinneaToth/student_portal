# Student Portal

![Preview of layout](preview.png)

[Live Page](https://linneatoth.github.io/student_portal/)

This is..

## Tech Stack
- React + Vite
- React Router (HashRouter) 
- Material UI (MUI)
- Bootstrap 5 (with some custom SASS)

## Features

### Course registration system
- Site-wide access to user's registered courses as well as available courses, using **React Context API**
- Several entry points for **registration** - from course details page, targeting specific course, or from a dialogue with a drop down list offering all available courses
- Registration form with **validation** using HTML5 (required & type)
- **Dynamic course availability**, based on already registered courses
- All courses listed as **cards**, each with a dynamic link to a page with course details
- **Search** function for **instant filtering** of course cards

### News page
- News page with dynamic **pagination**
- Search function for **dynamic filtering** of news post 

### MUI & Bootstrap
- Registration dialog powered by customized **Material UI** components
- Layout and style of **responsive and consistent interface** made with **Bootstrap**
- Responsive navbar, made with **Bootstrap** and active section management with **React Router**

### Routing
- Single Page Application **SPA** facilitated by **React Router**
- Routes: Home, Courses, Course Details with dynamic URL's based on route :id, News, Registration, and a fallback **Page Not Found** 

### General approach
- Separation of pages and components

## Main takeaways
I am admittedly 10+ years late to the party, but that won't put a damper on my enthusiasm for routing and hooks! My main takeaway from this project is to keep digging into the how's and why's on these apparently very useful tools. 

Bootstrap was a requirement for this assignment. It was great to really try it out, but I must confess, I don't love it. I would probably have chosen Tailwind or native CSS if it were up to me. Bootstrap comes across as a bit too clunky and abstract for my taste. 

I will keep working on getting better at separating logic from presentation in my components. 

# Assignment - machine translated from Swedish

> # About the Assignment
>
> You are going to build a **Student Portal** in React.
>
> The app should help students to:
>
> - View information about courses.
> - Read news (blog posts).
> - Register for a course.
>
> The project should use **several important React concepts** as well as an **external UI library** and **Routing**.
>
> # Case
>
> - Set up a new React project using **Vite** or **Create React App**.
> - Use **React Router** for navigation between pages.
> - Use **Bootstrap** to style the layout (e.g., Grid, Cards, Buttons).
> - Use **Material UI** on at least **one important component** (example: a nice registration form or dialog).
> - Build a **responsive** and **user-friendly** app.
>
> # What You Should Do
> ### 1. Routing (React Router)
>
> - Create at least **three pages**:
>     - **Home page** (`/`) – Welcome message and quick menu.
>     - **Courses** (`/courses`) – List of courses (fetched from an array or API).
>     - **News/Blog** (`/news`) – List of news/blog posts.
>
> ### 2. Navbar (Navigation Menu)
>
> - Use a **Bootstrap Navbar** that shows links to all pages.
>
> ### 3. Course List
>
> - Display courses in a **Bootstrap grid**.
> - Each course is displayed in a **Bootstrap Card**.
> - Each course card should show:
>     - Course name
>     - Short description
>     - A **"Read More"** button.
>
> ### 4. Course Details (Dynamic Route)
>
> - When you click "Read More", navigate to a new page `/courses/:id` that shows more information about the course.
> - Use **React Router params** to get the course ID.
>
> ### 5. Registration (Material UI)
>
> **Use `useContext` and the Context API** to keep track of which courses the student has registered for, and share this information across the app.
>
> - Create a page or dialog where a student can register for a course:
>     - The form should use **Material UI TextField** and **Material UI Button**.
>     - The form should include:
>         - Name
>         - Email
>         - Course selection (Dropdown)
>
> ### 6. News / Blog
> - Display a list of blog posts/news.
> - Posts can be hardcoded in an array or fetched from an API (e.g. https://jsonplaceholder.typicode.com/posts).
>
>
> ## ⭐ Extra Challenges (Grade VG)
>
> - **Search function**: Add a search function to the course or news page.
> - **Pagination**: Split news into multiple pages.
> - **Registration validation**: Validate form fields so that error messages are shown when text fields are empty.
> - **Context API**: Use Context to keep track of which courses a student has registered for.
> - **Material UI Dialog**: When clicking "Register", open a Material UI Dialog (popup) instead of a separate page.
> 
