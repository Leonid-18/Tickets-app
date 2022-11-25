// Stub module

// Candidates: don't modify this function (it's stubbing a database call),
// transform its data in another function
function octa() {
  return [
    { id: 0, duration: '1-hour', rider: 'Adult', price: 1.50 },
    { id: 1, duration: '1-hour', rider: 'Special', price: 0.50 },
    { id: 2, duration: '3-day', rider: 'Adult', price: 3.00 },
    { id: 3, duration: '3-day', rider: 'Special', price: 1.00 },
    { id: 4, duration: 'Week pass', rider: 'Adult', price: 6.00 },
    { id: 5, duration: 'Week pass', rider: 'Special', price: 3.00 }
  ];
}

// Candidates: don't modify this function (it's stubbing a database call),
// transform its data in another function
function sfmuni() {
  return [
    { id: 6, duration: '1-hour', rider: 'Adult', price: 1.50 },
    { id: 7, duration: '1-hour', rider: 'Youth', price: 0.50 },
    { id: 8, duration: '1-hour', rider: 'Senior', price: 0.60 },
    { id: 9, duration: '7-day', rider: 'Adult', price: 5.00 }
  ];
}

const faresFor = agency => {
  if (agency === 'octa') {
    return octa();
  }
  // else if (agency === 'dart') {
  //   return dart();
  // }
  else if (agency === 'sfmuni') {
    return sfmuni();
  }
  else {
    throw new Error('No agency named "' + agency +'"');
  }
};

export { faresFor };