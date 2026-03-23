/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  if (password === "" || typeof password !== "string") {
    return "weak";
  }

  let criteriaCount = 0;

  if (hasAtLeastEightCharacters(password)) criteriaCount++;
  if (hasLowerCaseCharacter(password)) criteriaCount++;
  if (hasUpperCaseCharacter(password)) criteriaCount++;
  if (hasNumber(password)) criteriaCount++;
  if (hasOneSpecialCharacter(password)) criteriaCount++;

  if (criteriaCount <= 1) return "weak";
  if (criteriaCount === 2 || criteriaCount === 3) return "medium";
  if (criteriaCount === 4) return "strong";
  if (criteriaCount === 5) return "very strong";
}

// * The checker evaluates 5 criteria:
//  *   1. At least 8 characters long
function hasAtLeastEightCharacters(password) {
  return password.length >= 8
}
//  *   2. Contains at least one uppercase letter (A-Z)
function hasUpperCaseCharacter(password) {
  for (const letter of password) {
    if (letter >= 'A' && letter <= 'Z') {
      return true
    }
  }
  return false
}
//  *   3. Contains at least one lowercase letter (a-z)
function hasLowerCaseCharacter(password) {
  for (const letter of password) {
    if (letter >= 'a' && letter <= 'z') {
      return true
    }
  }
  return false
}
//  *   4. Contains at least one number (0-9)
function hasNumber(password) {
    return /\d/.test(password)
}
//  *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
function hasOneSpecialCharacter(password) {
  const specialCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?"
  for (const letter of password) {
    if (specialCharacters.includes(letter)) {
      return true
    }
  }
  return false
}
