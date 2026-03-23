/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
const  SEASON = {
  Winter: "Winter",
  Spring: "Spring",
  Summer: "Summer",
  Autumn: "Autumn"
}
const monthToSeason = {
  12: SEASON.Winter,
  1: SEASON.Winter,
  2: SEASON.Winter,
  3: SEASON.Spring,
  4: SEASON.Spring,
  5: SEASON.Spring,
  6: SEASON.Summer,
  7: SEASON.Summer,
  8: SEASON.Summer,
  9: SEASON.Autumn,
  10: SEASON.Autumn,
  11: SEASON.Autumn
}

const ACTIVITIES = {
  Winter: {
    cold: "ice skating",   // temperature >= 0
    freezing: "skiing"     // temperature < 0
  },
  Spring: {
    warm: "hiking",        // temperature > 20
    mild: "museum visit"   // temperature <= 20
  },
  Summer: {
    hot: "swimming",       // temperature > 35
    moderate: "cycling"    // temperature <= 35
  },
  Autumn: {
    warm: "nature walk",   // temperature > 15
    cool: "reading at a cafe" // temperature <= 15
  }
};
export function getSeasonActivity(month, temperature) {
  const isMonthInRange = month >= 1 && month <= 12
   if (!isMonthInRange) { return null}
   const season = monthToSeason[month]

 let activity = null
 switch(season) {
  case SEASON.Winter: activity = (temperature >= 0) ? ACTIVITIES.Winter.cold: ACTIVITIES.Winter.freezing; break;
  case SEASON.Spring: activity = (temperature) > 20 ? ACTIVITIES.Spring.warm: ACTIVITIES.Spring.mild; break;
  case SEASON.Summer: activity = (temperature > 35) ? ACTIVITIES.Summer.hot: ACTIVITIES.Summer.moderate;break;
  case SEASON.Autumn: activity = (temperature > 15) ? ACTIVITIES.Autumn.warm: ACTIVITIES.Autumn.cool; break;
 }

 return {season, activity}
}
