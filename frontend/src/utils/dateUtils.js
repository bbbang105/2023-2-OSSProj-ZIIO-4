export const calculateDDay = eventDate => {
  const now = new Date();
  const eventDateEnd = new Date(eventDate);
  const timeDiff = eventDateEnd.getTime() - now.getTime();
  const dayDiff = Math.round(timeDiff / (1000 * 3600 * 24));

  // NaN 체크: 유효하지 않은 날짜면 빈 문자열 반환
  if (isNaN(dayDiff)) {
    return '';
  }

  // 이벤트가 오늘인 경우
  if (dayDiff === 0) {
    return 'D-Day';
  }

  // 이벤트가 이미 지난 경우
  if (dayDiff < 0) {
    return `D+${Math.abs(dayDiff)}`;
  }

  // 이벤트가 아직 오지 않은 경우
  return `D-${dayDiff}`;
};

export const formatDate = dateString => {
  if (!dateString) return '';

  console.log('formatDate called with:', dateString); // Debugging line
  console.log('formatDate called with:', typeof dateString); // Debugging line

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    console.error('Invalid date:', dateString); // Debugging line
    return 'Invalid date';
  }

  if ((date.getHours() === 0 && date.getMinutes() === 0) || (date.getHours() === 23 && date.getMinutes() === 59)) {
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  }
  return `${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;
};
