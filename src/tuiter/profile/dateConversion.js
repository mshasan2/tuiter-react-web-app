
const DateConversion = (date) => {
    let split_date = date.split("/");
    if ((split_date.length) === 2) {
        const date = new Date(split_date[1], split_date[0] - 1, 1);
        const month = date.toLocaleString('default', { month: 'long' });
        return month + " " + split_date[1];
    } else {
        const date = new Date(split_date[2], split_date[1] -1, split_date[0]);
        const month = date.toLocaleString('default', { month: 'long' });
        return split_date[0] + " " + month + " " + split_date[2];
    }
}

export default DateConversion