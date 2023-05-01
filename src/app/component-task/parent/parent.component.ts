import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent
  implements OnInit, DoCheck, AfterContentInit, AfterContentChecked
{
  isChild = false;
  constructor() {
    console.log('parent constructor is called !!');
  }
  public ngOnInit(): void {
    console.log('parent onit is called !!');
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }

  public ngDoCheck(): void {
    console.log('parent DoCheck is called !!');
  }

  public ngAfterContentInit(): void {
    console.log('parent after content init is called ');
  }

  public ngAfterContentChecked(): void {
    console.log('parent after content checked is called ');
  }
}
