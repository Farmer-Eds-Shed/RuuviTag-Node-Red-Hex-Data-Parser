# 📟 RuuviTag Node-RED Hex Data Parser

[![GPLv3 License](https://img.shields.io/badge/license-GPLv3-blue.svg)](LICENSE)
[![Node-RED](https://img.shields.io/badge/Node--RED-Compatible-red.svg)](https://nodered.org/)
[![BLE Data](https://img.shields.io/badge/BLE-RuuviTag-00bfff.svg)](https://ruuvi.com/)
[![Live Project](https://img.shields.io/badge/Project-Farmer--Eds--Shed-green.svg)](https://github.com/Farmer-Eds-Shed)

Parses raw **hexadecimal BLE advertisement data** from RuuviTags into structured, human-readable JSON within [Node-RED](https://nodered.org/). Ideal for low-power environmental or livestock monitoring systems using RuuviTag sensors.

---

## 🔧 What It Does

- Parses **Data Format 5** (DF5) RuuviTag advertisements
- Converts BLE hex payloads into JSON containing:
  - Temperature (°C)
  - Humidity (%RH)
  - Pressure (hPa)
  - Battery voltage (mV)
  - Accelerometer data x,y,z
  - TX Power
  - Movement Counter
  - Sequence Number
  - MAC address
- Outputs usable JSON for dashboards, MQTT, InfluxDB, etc.

## 🐄 Why It Matters

Used in **calf monitoring** and other agricultural sensor deployments where BLE tags are collected via gateways and passed to Node-RED in raw hex form.

## 📥 Input Example

Raw `data` from `ruuvi-go-gateway` over MQTT:

```json
{
  "data": "9904051A1ECE1EFC1803FDFFFEC48201617A370CBB"
}

```

## 📤 Output Example
Parsed JSON:

```json
{
  "temperature": 22.52,
  "humidity": 48.69,
  "pressure": 1000.14,
  "battery": 2965,
  "txPower": 4,
  "movementCounter": 123,
  "measurementSequence": 4712,
  "mac": "C4:82:01:61:7A:37"
}
```

## 🚀 How to Use
1. Import the Node-RED Flow
You can find the parser inside flow.json. In Node-RED:
- Go to menu → Import → Clipboard
- Paste the contents of flow.json
- Deploy

2. Connect to Your Ruuvi Gateway
Use MQTT (e.g. from ruuvi-go-gateway) or other BLE sources to feed the raw data payload to the parser node.

## 🧱 Dependencies
Node-RED

JSON and function nodes (no external modules required)

Tested with ruuvi-go-gateway running on Raspberry Pi

## 🧠 Background
This parser was developed to support livestock health monitoring projects using wearable RuuviTags. BLE data is received in raw hex and decoded in-flight to minimize overhead and retain flexibility.

## 👨‍🌾 Maintainer
@Farmer-Eds-Shed

## 📄 License
This project is licensed under the GNU General Public License v3.0.
See the LICENSE file for details.
