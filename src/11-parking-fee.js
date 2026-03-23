/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */

const VEHICLE_TYPE = {
  CAR: "car",
  MOTOR: "motorcycle",
  BUS: "bus"
}

  const FIRST_HOUR_CAR_FEE = 5
  const FIRST_HOUR_MOTOR_FEE = 3
  const FIRST_HOUR_BUS_FEE = 10
  const CAR_DAILY_MAX_FEE = 30
  const MOTOR_DAILY_MAX_FEE = 18
  const BUS_DAILY_MAX_FEE = 60
  const REMAINING_HOUR_CAR_FEE = 3
  const REMAINING_HOUR_MOTOR_FEE = 2
  const REMAINING_HOUR_BUS_FEE = 7

export function calculateParkingFee(hours, vehicleType) {
  hours = Math.ceil(hours)
  if (hours <= 0) { return -1}
  const isCar = vehicleType == VEHICLE_TYPE.CAR
  const isMotorCycle = vehicleType == VEHICLE_TYPE.MOTOR
  const isBus = vehicleType ==  VEHICLE_TYPE.BUS
  if (!(isCar || isMotorCycle || isBus)) { return -1}
  // Your code here
  // if the fee is more than daily maximum then simply return daily maximum
//    * Rates (first hour / each additional hour):
//  *   - "car":        $5 first hour, then $3/hour
//  *   - "motorcycle": $3 first hour, then $2/hour
//  *   - "bus":        $10 first hour, then $7/hour

  return calculateFeesHelper(hours, vehicleType)
}

function calculateFeesHelper(hours, vehicleType) {
  const remainingHour = hours - 1
  let parkingFees = 0

  if (vehicleType === VEHICLE_TYPE.CAR) {
    parkingFees = FIRST_HOUR_CAR_FEE
    const remainingHourCost = findRemainingHourCost(remainingHour, REMAINING_HOUR_CAR_FEE)
    parkingFees += remainingHourCost
    if (parkingFees > CAR_DAILY_MAX_FEE) { parkingFees = CAR_DAILY_MAX_FEE}
  }
  else if (vehicleType === VEHICLE_TYPE.MOTOR) {
    parkingFees = FIRST_HOUR_MOTOR_FEE
    const remainingHourCost = findRemainingHourCost(remainingHour, REMAINING_HOUR_MOTOR_FEE)
    parkingFees += remainingHourCost
    if (parkingFees > MOTOR_DAILY_MAX_FEE) { parkingFees = MOTOR_DAILY_MAX_FEE}
  }
  else {
    parkingFees = FIRST_HOUR_BUS_FEE
    const remainingHourCost = findRemainingHourCost(remainingHour, REMAINING_HOUR_BUS_FEE)
    parkingFees += remainingHourCost
    if (parkingFees > BUS_DAILY_MAX_FEE) { parkingFees = BUS_DAILY_MAX_FEE}
  }

  return parkingFees
}

function findRemainingHourCost(remainingHour, amountPerRemainingHour) {
  let remainingHourCost = 0
  for (let i = 1; i <= remainingHour; i++) {
    remainingHourCost += amountPerRemainingHour
  }
  return remainingHourCost
}
