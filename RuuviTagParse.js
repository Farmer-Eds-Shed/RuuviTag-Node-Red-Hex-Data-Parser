let str = msg.payload.data;
const data = {};
//type
let part1 = "0x" + str[14] + str[15] ;
data.type = parseInt(part1);
//temperature
let part2 = "0x" + str[16] + str[17] + str[18] + str[19];
temperature = parseInt(part2);
  if (temperature > 32767) {
    temperature -= 65534;
  }
data.temperature = temperature * 0.005;
//humidity
let part3 = "0x" + str[20] + str[21] + str[22] + str[23];
data.humidity = parseInt(part3) / 400.0;
//pressure
let part4 = "0x" + str[24] + str[25] + str[26] + str[27];
data.pressure = parseInt(part4) + 50000;

msg.payload = data

return msg;
