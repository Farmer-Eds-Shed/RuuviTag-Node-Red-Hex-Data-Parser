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

//accelerometer
//X
let part5 = "0x" + str[28] + str[29] + str[30] + str[31];
accelerationX = parseInt(part5);
if (accelerationX > 32767) accelerationX -= 65536; // two's complement
data.accelerationX = accelerationX /1000;
//Y
let part6 = "0x" + str[32] + str[33] + str[34] + str[35];
accelerationY = parseInt(part6);
if (accelerationY > 32767) accelerationY -= 65536;
data.accelerationY = accelerationY /1000;
//Z
let part7 = "0x" + str[36] + str[37] + str[38] + str[39];
accelerationZ = parseInt(part7);
if (accelerationZ > 32767) accelerationZ -= 65536; // two's complement
data.accelerationZ = accelerationZ /1000

//Power
let part8 = "0x" + str[40] + str[41] + str[42] + str[43];
let power = parseInt(part8).toString(2);
voltage = power.substr(0, 11);
TXdbm = power.slice(-5);
data.voltage = (parseInt(voltage, 2) + 1600) / 1000;
data.TXdbm = (parseInt(TXdbm, 2) & 0b11111) * 2 - 40;

//movementCounter
let part9 = "0x" + str[44] + str[45];
data.movementCounter = parseInt(part9);

//measurementSequenceNumber
let part10 = "0x" + str[46] + str[47] + str[48] + str[49];
data.measurementSequenceNumber = parseInt(part10);

//mac
let part11 = str.slice(-12);
data.mac = part11;

msg.payload = data
return msg;
