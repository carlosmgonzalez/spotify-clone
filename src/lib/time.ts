export const time = (seconds: number) => {
  let minute: string | number = Math.floor((seconds / 60) % 60);
  let second: string | number = seconds % 60;
  second = (second < 9.5 ) ? '0' + Math.round(second) : Math.round(second);
  return minute + ':' + second;
};
