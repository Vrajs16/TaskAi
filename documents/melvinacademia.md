# Melvin Academia MD File

 10/26: Added Readme File to Project <br>
 11/1: Started work on banner <br>
 11/2: <br>
 1. Added banner to layouts and as a wrapper in routes
 2. Added place holder logo for top of page
 3. Hard coded spacing on sign-in/sign-out buttons to put them on right side of screen
 11/3-11/16 <br>https://github.com/Vrajs16/TaskAi/pull/40/commits<br>
 1. Update Scaffold Layout so that posts page have a similar banner to the main page
 2. Add task card UI to page for viewing single tasks
 3. Update Taskform UI so that the look of the New/Edit Task Page matches the single task view
 4. Autosave needs to be added to Edit Task page
 5. Formatting on Task form needs to be revised for a cleaner look
 6. Additional statuses need to be added to the New/Edit task pages
 11/17-11/23 <br> https://github.com/Vrajs16/TaskAi/pull/50/commits/adbe1293e708162bcd06e37224db446460bc4496 <br>
 1. Implement Task Card UI changes that were lost due to merge conflicts
 2. Update Tasks and Task View to list tasks using the Task Card UI
 3. Planner page uses Task Card to display list of Tasks
 4. Individual Task View can now be accessed by clicking title of task card
 5. Autosave to be implemented
 11/24-12/1 <br>
 1. Storybooks files need to be added for front end compenents
 2. Taskform needs autosave implementation; isCompleted toggle needs to be added, isAppointment toggle is removed
 3. Researched and tested potential implementations for autosave, form currently uses onSubmit events, needs to be changed to onChange
 12/1-12/14 <br> https://github.com/Vrajs16/TaskAi/commit/2582f810cba5b1e4478b75343aa45bb04f69d3b3 <br>
 1. Storybook files to task related compenents that I worked on
 2. Removed isAppointment toggle from form and removed Appointment attribute from task view
 3. Added isComplete toggle, can save completed and incompleted statuses, previous form had isComplete hard coded to false
 4. Implemented autosave functionality on Taskform and removed save button, form now calls update mutation each time a field is changed, so each input is automatically saved.
