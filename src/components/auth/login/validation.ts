import { formType2 } from "../../../stores/user/types"

export const validateEmail = (email: string): boolean => {
  const re =
    /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z-]+\.)+[A-Za-z]{2,}))$/
  return re.test(email)
}

const isValidInput = (
  regexString: string,
  value: string,
  ignoreCase = false,
): boolean => {
  let regex = RegExp(regexString)
  if (ignoreCase) {
    regex = RegExp(regexString, "i")
  }
  return regex.test(value)
}

export const validateForm = (form: formType2) => {
  const { email, password } = form
  const errors: Record<string, string> = {}
  if (!email) {
    errors.email = "Enter email id"
  } else if (!validateEmail(email)) {
    errors.email = "Enter valid email"
  }
  if (!password) {
    errors.password = "Enter a password"
  } else if (
    !isValidInput(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
      password,
    )
  ) {
    errors.password =
      "Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters"
  }

  return Object.keys(errors).length > 0 ? errors : null
}
