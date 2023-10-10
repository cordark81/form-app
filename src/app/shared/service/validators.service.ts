import { Injectable } from '@angular/core'
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms'

@Injectable({ providedIn: 'root' })
export class ValidatorService {
    firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
    emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'

    cantBeStrider = (control: FormControl): ValidationErrors | null => {
        const value: string = control.value.trim().toLowerCase()
        if (value === 'strider') {
            return {
                noStrider: true,
            }
        }
        return null
    }

    isValidField = (form: FormGroup, field: string) => {
        return form.controls[field].errors && form.controls[field].touched
    }

    isFieldOneEqualFieldTwo(field1: string, field2: string) {
        return (FormGroup: AbstractControl): ValidationErrors | null => {
            const fieldValue1 = FormGroup.get(field1)?.value
            const fieldValue2 = FormGroup.get(field2)?.value

            if (fieldValue1 !== fieldValue2) {
                FormGroup.get(field2)?.setErrors({ notEqual: true })
                return { notEquals: true }
            }
            FormGroup.get(field2)?.setErrors(null)
            return null
        }
    }
}
