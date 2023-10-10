import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ValidatorService } from 'src/app/shared/service/validators.service'
import { EmailValidators } from 'src/app/shared/validators/email-validator.service'

@Component({
    templateUrl: './register-page.component.html',
    styles: [],
})
export class RegisterPageComponent {
    myForm: FormGroup = this.fb.group(
        {
            name: [
                '',
                [
                    Validators.required,
                    Validators.pattern(this.validatorsService.firstNameAndLastnamePattern),
                ],
            ],
            email: [
                '',
                [Validators.required, Validators.pattern(this.validatorsService.emailPattern)],
                [this.emailValidator],
            ],
            username: ['', [Validators.required, this.validatorsService.cantBeStrider]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            password2: ['', [Validators.required]],
        },
        { validators: [this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2')] },
    )

    constructor(
        private fb: FormBuilder,
        private validatorsService: ValidatorService,
        private emailValidator: EmailValidators,
    ) {}

    isValidField(field: string) {
        return this.validatorsService.isValidField(this.myForm, field)
    }

    onSubmit() {
        this.myForm.markAllAsTouched()
    }
}
