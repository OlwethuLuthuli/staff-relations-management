function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.transform === 'translateX(0)') {
      sidebar.style.transform = 'translateX(-100%)';
    } else {
      sidebar.style.transform = 'translateX(0)';
    }
}

function showDashboard() {
    var center = document.getElementById('center');
    center.innerHTML = '<h1>Welcome to Admin Dashboard</h1>';
}

function showTasks() {
    var center = document.getElementById('center');
    center.innerHTML = '<h2>Tasks</h2><p>List of tasks will be displayed here.</p>';
}

function showEmployees() {
    var center = document.getElementById('center');
    center.innerHTML = `
        <h2>Employee Overview</h2>
        <table id="employeeTable">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <!-- Table rows will be dynamically added here -->
            </tbody>
        </table>
        <form id="addEmployeeForm">
            <input type="text" id="employeeId" placeholder="Employee ID" required>
            <input type="text" id="employeeName" placeholder="Name" required>
            <input type="text" id="employeeDepartment" placeholder="Department" required>
            <button type="submit">Add Employee</button>
        </form>
    `;
    displayEmployees(); // Call a function to populate the table with existing employees
}

function showMessages() {
    var center = document.getElementById('center');
    center.innerHTML = '<h2>Messages</h2><p>List of messages will be displayed here.</p>';
}

function showMeetings() {
    var center = document.getElementById('center');
    center.innerHTML = '<h2>Meetings</h2><p>List of meetings will be displayed here.</p>';
}

function showTimesheet() {
    var center = document.getElementById('center');
    center.innerHTML = `
    <main class="table">
    <section class="header">
      <h1><b>Employee Timesheet</b></h1>
    </section>
    <section class="body">
      <table>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Task</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" id="employeeId" /></td>
            <td><input type="text" id="task" /></td>
            <td><input type="date" id="date" /></td>
            <td><input type="time" id="startTime" /></td>
            <td><input type="time" id="endTime" /></td>
            <td>
              <input type="radio" id="status2" name="progress" />
              <label for="status2">In Progress</label>

              <input type="radio" id="status3" name="progress" />
              <label for="status3">Completed</label>
            </td>
            <td>
              <button id="addTask" class="btn btn-success btn-sm">
                Add Task
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
    `;
  
    // Initialize timesheet functionality
    initializeTimesheet();
  }

function showMeals() {
    var center = document.getElementById('center');
    center.innerHTML = `
    <section class="header">
      <h1> <b>Create Meals</b></h1>
    </section>
    <button data-target="#addTaskModel" id="addBtn">Add Meal</button>
        <section class="body">
            <table id="mealsTable">
                <thead>
                    <tr>
                        <th>Meal Type</th>
                        <th>Protein</th>
                        <th>Starch</th>
                        <th>Fruit</th>
                        <th>Drink</th>
                        <th>Snack</th>
                        <th>Confirm Meal Booking</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select>
                                <option value="" selected disabled>Select</option> <!-- First option remains enabled -->
                                <option value="vegan">Vegan</option>
                                <option value="vegetarian">Vegetarian</option>
                                <option value="halal">Halal</option>
                                <option value="kosher">Kosher</option>
                                <option value="gluten-free">Gluten-Free</option>
                            </select>
                        </td>
                        <td>
                            <select>
                                <option value="" selected disabled>Select</option> <!-- First option remains enabled -->
                                <option value="chicken">Chicken</option>
                                <option value="beef">Beef</option>
                                <option value="fish">Fish</option>
                                <option value="tofu">Tofu</option>
                            </select>
                        </td>
                        <td>
                            <select>
                                <option value="" selected disabled>Select</option> <!-- First option remains enabled -->
                                <option value="rice">Rice</option>
                                <option value="pasta">Pasta</option>
                                <option value="potatoes">Potatoes</option>
                                <option value="quinoa">Quinoa</option>
                            </select>
                        </td>
                        <td>
                            <select>
                                <option value="" selected disabled>Select</option> <!-- First option remains enabled -->
                                <option value="apple">Apple</option>
                                <option value="banana">Banana</option>
                                <option value="orange">Orange</option>
                                <option value="grapes">Grapes</option>
                            </select>
                        </td>
                        <td>
                            <select>
                                <option value="" selected disabled>Select</option> <!-- First option remains enabled -->
                                <option value="water">Water</option>
                                <option value="juice">Juice</option>
                                <option value="soda">Soda</option>
                                <option value="tea">Tea</option>
                            </select>
                        </td>
                        <td>
                            <select>
                                <option value="" selected disabled>Select</option> <!-- First option remains enabled -->
                                <option value="nuts">Nuts</option>
                                <option value="yogurt">Yogurt</option>
                                <option value="granola">Granola</option>
                                <option value="corn chips">Corn Chips</option>
                            </select>
                        </td>
                        <td id="mealConfirmation">In Progress...</td>
                    </tr>
                </tbody>
            </table>
    `;
  
    // Initialize meals functionality
    initializeMeals();
  }
  
// JavaScript code to handle adding and removing employees in the employee section
document.addEventListener('DOMContentLoaded', function () {
    // Function to display employees in the table
    function displayEmployees() {
        const tableBody = document.querySelector("#employeeTable tbody");
        tableBody.innerHTML = ""; // Clear existing rows

        // Iterate over the employees array and add rows to the table
        employees.forEach((employee, index) => {
            const row = `
              <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td><button class="removeBtn" data-index="${index}">Remove</button></td>
              </tr>
            `;
            tableBody.innerHTML += row;
        });
    }

    // Function to add employee
    function addEmployee(employee) {
        employees.push(employee);
        displayEmployees();
    }

    // Function to remove employee
    function removeEmployee(index) {
        employees.splice(index, 1);
        displayEmployees();
    }

    // Event listener for form submission to add employee
    document.getElementById("addEmployeeForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const employeeId = document.getElementById("employeeId").value;
        const employeeName = document.getElementById("employeeName").value;
        const employeeDepartment = document.getElementById("employeeDepartment").value;

        // Add the employee
        addEmployee({ id: employeeId, name: employeeName, department: employeeDepartment });

        // Clear form fields
        this.reset();
    });

    // Event delegation for remove buttons
    document.getElementById("employeeTable").addEventListener("click", function (event) {
        if (event.target.classList.contains("removeBtn")) {
            const index = event.target.dataset.index;
            removeEmployee(index);
        }
    });

    // Initial display of employees
    displayEmployees();
});

  
  // Function to initialize meals functionality
  function initializeMeals() {
    const mealForm = document.getElementById('mealForm');
    const mealList = document.getElementById('mealList');
    const assignedEmployeeSelect = document.getElementById('assignedEmployee');
    const meals = [];
  
    // Function to display meals in the list
    function displayMeals() {
      mealList.innerHTML = ""; // Clear existing list
  
      // Iterate over the meals array and add items to the list
      meals.forEach(meal => {
        const item = document.createElement('li');
        item.textContent = `${meal.name} (Assigned to: ${meal.assignedEmployee})`;
        mealList.appendChild(item);
      });
    }
  
    // Function to handle form submission
    mealForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const mealName = document.getElementById('mealName').value;
      const assignedEmployee = assignedEmployeeSelect.value;
  
      // Create the meal object and add it to the meals array
      meals.push({ name: mealName, assignedEmployee });
      displayMeals();
      this.reset(); // Clear form fields
    });
  
    // Populate the assigned employee select options
    // You can replace this with actual employee data from your system
    function populateEmployeeOptions() {
      const employees = ['Employee 1', 'Employee 2', 'Employee 3']; // Example employee names
      employees.forEach(employee => {
        const option = document.createElement('option');
        option.textContent = employee;
        option.value = employee;
        assignedEmployeeSelect.appendChild(option);
      });
    }
  
    // Call the function to populate employee options
    populateEmployeeOptions();
  }
  
