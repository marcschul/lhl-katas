// LOGIC
// input: YYYY/MM/DD
// output: December 2nd, 2017

const talkingCalendar = date => {

  let monthNum = 0;
  date[5] === '0' ? monthNum = date[6] : monthNum = date[5] + date[6];

  let dayNum = 0;
  date[8] === '0' ? dayNum = date[9] : dayNum = date[8] + date[9];

  let yearNum = date[0] + date[1] + date[2] + date[3];

  let result = '';
  
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const days = [
    '1sh',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th',
    '10th',
    '11th',
    '12th',
    '13th',
    '14th',
    '15th',
    '16th',
    '17th',
    '18th',
    '19th',
    '20th',
    '21st',
    '22nd',
    '23rd',
    '24th',
    '25th',
    '26th',
    '27th',
    '28th',
    '29th',
    '30th',
    '31st'
  ]

  for (let i = 1; i <= months.length; i++) {
    monthNum === i.toString() ? result = result + months[i - 1] + ' ' : null;
  }

  for (let i = 1; i <= days.length; i++) {
    dayNum === i.toString() ? result = result + days[i - 1] + ', ' + yearNum: null; 
  }

  return result;
}

console.log(talkingCalendar("2017/12/02"));
// expected output: December 2nd, 2017
console.log(talkingCalendar("2007/11/11"));
// expected output: November 11th, 2007
console.log(talkingCalendar("1987/08/24"));
// expected output: August 24th, 1987