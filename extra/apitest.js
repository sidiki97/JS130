
export default function move(houseNumber = '') {
  let address = '1234 Home Street';
  address = houseNumber + address.substring(4);

  return address;
}

