import dayjs from "dayjs"

export const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
    const firstDate = dayjs().year(year).month(month).startOf("month");
    const lastDate = dayjs().year(year).month(month).endOf("month");
    const myDates = [];

//Prefix dates (to complete grid)
    for(let i = 0; i < firstDate.day(); ++i) {
        myDates.push({date: firstDate.day(i), currentMonth: false});
    }

//Current month dates
    for(let i = firstDate.date(); i <= lastDate.date(); ++i) {
        myDates.push({ date: firstDate.date(i), currentMonth: true, today: firstDate.date(i).toDate().toDateString() === dayjs().toDate().toDateString() })
    }

//Post month dates (to complete grid)
    const remainingDays = 42 - myDates.length;
    for(let i = lastDate.date()+1; i <= lastDate.date() + remainingDays; ++i) {
        myDates.push({ date: lastDate.date(i), currentMonth: false });
    }

    return myDates;

}

export function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]