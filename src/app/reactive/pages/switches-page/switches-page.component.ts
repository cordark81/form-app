import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
    templateUrl: './switches-page.component.html',
    styles: [],
})
export class SwitchesPageComponent implements OnInit {
    myForm: FormGroup = this.fb.group({
        gender: ['M', Validators.required],
        wantNotification: [true, Validators.required],
        termsAndConditions: [false, Validators.requiredTrue],
    })

    person = {
        gender: 'F',
        wantNotification: false,
    }

    constructor(private fb: FormBuilder) {}
    ngOnInit(): void {
        this.myForm.reset(this.person)
    }

    isValidField(field: string): boolean | null {
        return this.myForm.controls[field].errors && this.myForm.controls[field].touched
    }

    onSave() {
        if (this.myForm.invalid) {
            this.myForm.markAllAsTouched()
            return
        }

        const { termsAndConditions, ...newPerson } = this.myForm.value
        this.person = newPerson
        console.log(this.myForm.value)
        console.log(this.person)
    }
}
