function formatDuration(duration) {
  const hours = Math.floor(duration / 60);
  const remainingMinutes = duration % 60;

  return hours === 0
    ? `${remainingMinutes}м`
    : remainingMinutes === 0
    ? `${hours}ч`
    : `${hours}ч ${remainingMinutes}м`;
}

export default formatDuration;
