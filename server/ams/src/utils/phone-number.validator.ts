import { ValidatorConstraintInterface, ValidatorConstraint } from "class-validator";

@ValidatorConstraint({ name: 'IsPhoneNumber', async: false })
export class IsPhoneNumber implements ValidatorConstraintInterface {
    validate(value: number): boolean | Promise<boolean> {
        const regex = new RegExp(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/);
        return regex.test(value.toString());
    }
    defaultMessage?(validationArguments?: import("class-validator").ValidationArguments): string {
        return 'not a valid phone number'
    }
    
}