import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { dynamicText, DynamicTextModel } from './onboardingtao.model';


@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent {
  staticTextObj: DynamicTextModel = dynamicText;
  firstFormGroup = this.formBuilder.group({
    fullName: ['', Validators.required],
    displayName: ['', Validators.required]
  });
  secondFormGroup = this.formBuilder.group({
    workspaceName: ['', Validators.required],
    workspaceUrl: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  get userData() { return this.firstFormGroup.controls; }
  get workspaceData() { return this.secondFormGroup.controls; }
}
