/**
 * check if an cn phone number legal
 * @param an cn phone number
 * @returns if the cn phone number legal
*/
function cnPhoneCheck(phoneNumber: string): boolean {
  const reg = new RegExp(/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/);
  const flag = reg.test(phoneNumber);

  if (flag) {
    return true;
  }
  return false
};

export { cnPhoneCheck }