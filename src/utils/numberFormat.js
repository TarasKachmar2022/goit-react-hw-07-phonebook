const numberFormat = number => {
  const part1 = number.slice(0, 3);
  const part2 = number.slice(3, 6);
  const part3 = number.slice(6, 9);
  const part4 = number.slice(9, 11);
  const part5 = number.slice(11, 13);
  return `${part1}(${part2})${part3}-${part4}-${part5}`;
};

export default numberFormat;
