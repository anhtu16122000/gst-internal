const numberHandler = {
  formatNumber(number: number | string, defaultValue: number = 0): string {
    if (!number) return defaultValue.toString();
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
};
export default numberHandler;
