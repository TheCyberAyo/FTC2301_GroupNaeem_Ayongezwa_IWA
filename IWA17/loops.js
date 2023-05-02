// scripts.js

const MONTHS = [
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
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

// const createArray = (length) => {
//     const result = []

//     for (0, i, length) {
//         result
//     }
// }

const createArray = (length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
      result.push(null);
    }
    return result;
  };




// const createData = () => {
//     const current = new Date
//     current.setDate(1)

//     startDay = current.day
//     daysInMonth = getDaysInMonth(current)

//     weeks = createArray(5)
//     days = createArray(7)
//     value = null

//     for (weekIndex in weeks) {
//         value = [{
//             week: weekIndex + 1,
//             days: []
//         }]

//         for (dayIndex in days) {
//             value = dayIndex - startDay
//             isValid = day > 0 && day <= daysInMonth

//             result[weekIndex].days = [{
//                 dayOfWeek: dayIndex + 1,
//                 value: isValid && day,
//             }]
//         }
//     }
// }


const createData = () => {
    const current = new Date();
    current.setDate(1);
  
    const startDay = current.getDay();
    const daysInMonth = getDaysInMonth(current);
  
    const weeks = createArray(5);
    const days = createArray(7);
  
    let day = 1;
    for (let weekIndex in weeks) {
      const week = { week: parseInt(weekIndex) + 1, days: [] };
  
      for (let dayIndex in days) {
        const value = day - startDay;
        const isValid = value > 0 && value <= daysInMonth;
  
        const isToday =
          current.getFullYear() === new Date().getFullYear() &&
          current.getMonth() === new Date().getMonth() &&
          day === new Date().getDate();
  
        week.days.push({
          dayOfWeek: parseInt(dayIndex) + 1,
          value: isValid ? value : null,
          isToday: isToday,
        });
  
        day++;
      }
  
      weeks[weekIndex] = week;
    }
  
    return weeks;
  };

// const addCell = (existing, classString, value) => {
//     const result = /* html */ `
//         <td ${classString}>
//             ${value}
//         </td>

//         ${existing}
//     `
// }

const addCell = (existing, classString, value) => {
    return (
      `<td class="${classString}">${value ? value : ""}</td>` +
      (existing ? existing : "")
    );
  };



// const createHtml = (data) => {
//     let result = ''

//     for (week, days in data) {
//         let inner = ""
//         addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')
    
//         for (dayOfWeek, value in days) {
//             classString = table__cell
// 						isToday = new Date === value
//             isWeekend = dayOfWeek = 1 && dayOfWeek == 7
//             isAlternate = week / 2

//             let classString = 'table__cell'

// 						if (isToday) classString = `${classString} table__cell_today`
//             if (isWeekend) classString === '{classString} table__cell_weekend'
//             if (isAlternate) classString === '{classString} table__cell_alternate'
//             addCell(inner, classString, value)
//         }

//         result = `<tr>${inner}</tr>`
//     }
// }

const createHtml = (data) => {
    let result = "";
  
    for (let week of data) {
      let inner = "";
      inner = addCell(inner, "table__cell table__cell_sidebar", `Week ${week.week}`);
  
      for (let day of week.days) {
        let classString = "table__cell";
        if (day.isToday) classString += " table__cell_today";
        if (day.dayOfWeek === 1 || day.dayOfWeek === 7)
          classString += " table__cell_weekend";
        if (week.week % 2 === 0) classString += " table__cell_alternate";
        inner = addCell(inner, classString, day.value);
      }
  
      result += `<tr>${inner}</tr>`;
    }
  
    return result;
  };

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)