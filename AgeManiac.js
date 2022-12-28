const ageManiac = (arrOfYears) => {
  let currentYear = new Date().getFullYear(); 
  let ages = arrOfYears.map(el => currentYear - el);
  let youngestYear = Math.max(...arrOfYears);
  let oldestYear = Math.min(...arrOfYears);
  let sum = ages.reduce((a, b) => a + b, 0);
  let youngestAge = Math.min(...ages);
  let average = Math.floor(sum / arrOfYears.length);
  let children =  ages.filter(el => el < 13);
  let teenagers = ages.filter(el => el > 12 && el < 20);
  let adults = ages.filter(el => el > 19);
  let size = arrOfYears.length;

  output(youngestYear, oldestYear, sum, youngestAge, average, children, teenagers, adults, size);
};

const output = (youngestYear, oldestYear, sum, youngestAge, average, children, teenagers, adults, size) => {
  console.log(`
  The  Youngest Year of Birth is ${youngestYear}\n
  The  Oldest Year of Birth is ${oldestYear}\n
  The  Sum of all ages is ${sum}\n
  The Youngest Age is ${youngestAge}\n
  The average of all ages is ${average}\n
  The number of children is ${children.length}\n
  The number of teenagers is ${teenagers.length}\n
  The number of adults is ${adults.length}\n
  The size of the poputation is ${size}
  `)
};

ageManiac([1992, 2002, 1947, 2000, 2002, 1920, 2004, 2000, 2012, 2019, 2012, 2016, 2019, 2011, 2013, 2020, 2020, 2012, 2020])
