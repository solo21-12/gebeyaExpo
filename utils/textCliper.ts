const textCliper = (text: string): string => {
  return `${text.slice(0, 100)}...`;
};
export default textCliper;
