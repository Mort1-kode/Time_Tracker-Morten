const activities = [
  {
    title: "Work",
    daily: { current: 5, previous: 7 },
    weekly: { current: 32, previous: 36 },
    monthly: { current: 103, previous: 128 },
  },
  {
    title: "Play",
    daily: { current: 1, previous: 2 },
    weekly: { current: 10, previous: 8 },
    monthly: { current: 23, previous: 29 },
  },
  {
    title: "Study",
    daily: { current: 0, previous: 1 },
    weekly: { current: 4, previous: 7 },
    monthly: { current: 13, previous: 19 },
  },
  {
    title: "Exercise",
    daily: { current: 1, previous: 1 },
    weekly: { current: 4, previous: 5 },
    monthly: { current: 11, previous: 18 },
  },
  {
    title: "Social",
    daily: { current: 1, previous: 3 },
    weekly: { current: 5, previous: 10 },
    monthly: { current: 21, previous: 23 },
  },
  {
    title: "Self Care",
    daily: { current: 0, previous: 1 },
    weekly: { current: 2, previous: 2 },
    monthly: { current: 7, previous: 11 },
  },
];

const buttons = document.querySelectorAll("[data-timeframe]");
const activityCards = document.querySelectorAll(".activity-card");

function updateCards(timeframe) {
  activities.forEach((activity, index) => {
    const currentHours = activity[timeframe].current;
    const previousHours = activity[timeframe].previous;

    const card = activityCards[index];
    const currentElement = card.querySelector(".current");
    const previousElement = card.querySelector(".previous");

    currentElement.textContent = `${currentHours}hrs`;
    previousElement.textContent = `Last Week - ${previousHours}hrs`;
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Update cards (daily, weekly, monthly)
    const selectedTimeframe = button.textContent.toLowerCase();
    updateCards(selectedTimeframe);
  });
});

updateCards("daily");
