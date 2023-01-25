function firstWednesdayOfMonth(year, month) {
  let firstDay = new Date(year, month, 1);
  let firstWednesday = new Date(firstDay);

  while (firstWednesday.getDay() !== 3) {
      firstWednesday.setDate(firstWednesday.getDate() + 1);
  }

  return firstWednesday;
}

//January = 0
//February = 1
//March = 2
//Etc...
console.log(firstWednesdayOfMonth(2023, 0)); // January 4th, 2023
