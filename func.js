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

//firstWednesdayOfMonth(2023, 0)); //--> Wed Jan 04 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
