const textCliper = (text: string, size?: number): string => {
  if (size) {
    return `${text.slice(0, size)}...`;
  }
  return `${text.slice(0, 100)}...`;
};
export default textCliper;
