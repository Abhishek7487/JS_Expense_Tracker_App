// Users Details
const usersDetails = [
  (userAbhishek = {
    userName: "abhishekpatil7770",
    password: "pass@1234",
    fullName: "Abhishek Patil",
  }),
  (userHitesh = {
    userName: "hitesh007",
    password: "hitesh@007",
    fullName: "Hitesh Choudhary",
  }),
  (userAnurag = {
    userName: "anuragtiwari8080",
    password: "anurag@me",
    fullName: "Anurag Tiwari",
  }),
];

// Components
const welcomeMessage = document.querySelector(".welcomeMessage");
const welcomeMessageUsername = document.querySelector(
  ".welcomeMessageUsername"
);
const logoutBtn = document.querySelector(".logoutBtn");

// Login form Components
const loginContainer = document.querySelector(".loginContainer");
const loginUsername = document.querySelector(".loginUsername");
const loginPassword = document.querySelector(".loginPassword");
const loginMessage = document.querySelector(".loginMessage");
const btnLogin = document.querySelector(".btnLogin");
const btnSignup = document.querySelector(".btnSignup");

// SignUp form Components
const signupContainer = document.querySelector(".signupContainer");
const signupUsername = document.querySelector(".signupUsername");
const signupPassword = document.querySelector(".signupPassword");
const signupMessage = document.querySelector(".signupMessage");
const btnCreate = document.querySelector(".btnCreate");

// Dashboard Components
const dashboardContainer = document.querySelector(".dashboardContainer");
const statusBarTotalAmount = document.querySelector(".statusBarTotalAmount");

const expensesTable = document.querySelector(".expensesTable");

const addExpenseDescription = document.querySelector(".addExpenseDescription");
const addExpenseAmount = document.querySelector(".addExpenseAmount");
const addExpenseBtn = document.querySelector(".addExpenseBtn");
const addExpenseMessage = document.querySelector(".addExpenseMessage");

btnLogin.addEventListener("click", (event) => {
  event.preventDefault();
  usersDetails.forEach((user) => {
    if (
      loginUsername.value === user.userName &&
      loginPassword.value === user.password
    ) {
      loginContainer.style.display = "none";
      welcomeMessage.classList.remove("hidden");
      welcomeMessageUsername.textContent = user.fullName;
      logoutBtn.classList.remove("hidden");
      dashboardContainer.style.display = "flex";
    } else {
      loginMessage.textContent = "Wrong Username or Passsword";
    }
  });
});

btnSignup.addEventListener("click", (event) => {
  event.preventDefault();
  loginContainer.style.display = "none";
  signupContainer.style.display = "flex";
});

btnCreate.addEventListener("click", () => {
  signupMessage.textContent = "New account created";
});

addExpenseBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (addExpenseDescription.value !== "" && addExpenseAmount.value !== "") {
    const expenseItem = `
    <div class="expenseItem">
      <p class="expenseDescription">${addExpenseDescription.value}</p>
      <p class="expenseAmount">${addExpenseAmount.value}</p>
      <p class="expenseDate">${new Date().toDateString()}</p>
    </div>
    `;

    expensesTable.insertAdjacentHTML("afterbegin", expenseItem);

    statusBarTotalAmount.textContent =
      Number(statusBarTotalAmount.textContent) + Number(addExpenseAmount.value);

    addExpenseDescription.value = "";
    addExpenseAmount.value = "";
  } else {
    addExpenseMessage.textContent = "Input please!";
  }
});
