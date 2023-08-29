export function toLunar(date: Date) {
  // Chuyển đổi ngày dương lịch thành số ngày Julius
  let julianDay = toJulianDay(date);

  // Tính ngày Sóc gần nhất
  let newMoonDay = getNewMoonDay(julianDay);

  // Tính số tháng âm lịch
  let month = newMoonDay / 29.530588853;
  month = Math.floor(month);

  // Tính ngày âm lịch
  let day = newMoonDay - 29.530588853 * month;
  day = Math.floor(day);

  // Tính năm âm lịch
  let year = julianDay / 365.2425;
  year = Math.floor(year);

  // Tính Can Chi
  let can = (year - 4800) % 10;
  let chi = (year - 4800) % 12;

  return {
    year: year,
    month: month,
    day: day,
    can: can,
    chi: chi,
  };
}

function toJulianDay(date: Date) {
  // Chuyển đổi ngày dương lịch thành tháng, ngày, năm
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  // Chuyển đổi tháng, ngày, năm thành số ngày Julius
  let julianDay = 365 * year;
  julianDay += (month - 1) * 30.4166666667;
  julianDay += day;

  // Chỉnh sửa cho các năm nhuận
  if (isLeapYear(year)) {
    if (month > 2) {
      julianDay += 1;
    }
  }

  return julianDay;
}

function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getNewMoonDay(julianDay: number) {
  // Tính T
  let T = julianDay / 1236.85;

  // Tính ngày Sóc
  let newMoonDay =
    2415020.75933 +
    29.53058868 * T +
    0.0001178 * T * T -
    0.000000155 * T * T * T;

  // Chỉnh sửa cho các năm nhuận
  if (isLeapYear(julianDay)) {
    newMoonDay += 1;
  }

  // Chỉnh sửa cho múi giờ
  newMoonDay += 7;

  return newMoonDay;
}
