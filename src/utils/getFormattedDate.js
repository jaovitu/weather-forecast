function getFormattedDate() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const date = new Date();

  const weekDay = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth() - 1];


  return {
      weekDay,
      day: day < 10 ? `0${day}` : `${day}`,
      month
  };
}

export default getFormattedDate;
