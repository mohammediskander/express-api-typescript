export interface ValidationInterface {
  isString?: boolean;
  isNumber?: boolean;
  isEmail?: boolean;
  isPassword?: boolean;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  length?: number;

  charOnly?: boolean;
  hexOnly?: boolean;
  numberOnly?: boolean;
}

export interface ValidationsInterface {
  [key: string]: ValidationInterface;
}

class Validation {
  private validations: ValidationsInterface;
  private values: object;

  constructor(validations: ValidationsInterface, values: object) {
    this.setValidations(validations);
    this.setValues(values);
  }

  private setValidations = (validations: ValidationsInterface) => {
    this.validations = validations;
    return this;
  };

  private setValues = (values: object) => {
    this.values = values;
    this.setValues;
  };

  private getValidations = (): ValidationsInterface => {
    return this.validations;
  };

  private getValues = (): object => {
    return this.values;
  };

  private required = (value: string): boolean => {
    return (
      value !== undefined &&
      value !== null &&
      typeof value === "string" &&
      value !== ""
    );
  };

  /**
   *
   * @param value the value to check
   * @description check if the value is a real number, Regardless of the type of `value`.
   * @returns return boolean value, whether the `Regular Expresion` is ture or not.
   */
  private isNumber = (value: string): boolean => {
    return /^([0-9]{0,})$/.test(value);
  };

  /**
   *
   * @param value
   */
  private isEmail = (value: string): boolean => {
    return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value);
  };

  private isPassword = (value: string): boolean => {
    return /^(?=(?:.*[A-Z]){2,})(?=(?:.*[a-z]){2,})(?=(?:.*\d){2,})(?=(?:.*[!@#$%^&*()\-_=+{};:,<.>]){2,})(?!.*(.)\1{2})([A-Za-z0-9!@#$%^&*()\-_=+{};:,<.>]{12,20})$/.test(
      value
    );
  };

  private charOnly = (value: string): boolean => {
    return /^([A-Za-z ,.'`-]{2,})$/.test(value);
  };

  /**
   * @returns return a boolean value, wheter the values is valid or not.
   */
  public validateAll = (): boolean => {
    const validations = this.getValidations();
    const values = this.getValues();

    Object.keys(validations).forEach((validation) => {
      const validationList: ValidationInterface = validations[validation];
      const value = values[validation];

      if (validationList.required && !this.required(value)) {
        throw {
          key: validation,
          message: "required",
          status: 400,
        };
      }

      if (validationList.isEmail && !this.isNumber(value))
        if (validationList.isEmail && !this.isEmail(value))
          throw {
            key: validation,
            message: "notValidEmail",
            status: 400,
          };

      if (validationList.isPassword && !this.isPassword(value)) {
        throw {
          key: validation,
          message: "notValidPassword",
          status: 400,
        };
      }

      if (validationList.charOnly && !this.charOnly(value)) {
        console.log("??");
        throw {
          key: validation,
          message: "notValidCharOnly",
          status: 400,
        };
      }
    });

    return true;
  };
}

export default Validation;
