import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log('child constructor is called !!');
  }
  public ngOnInit(): void {
    console.log('child onit is called !!');
  }

  public ngDoCheck(): void {
    console.log('child DoCheck is called !!');
  }

  public ngAfterContentInit(): void {
    console.log('child after content init is called ');
  }

  public ngAfterContentChecked(): void {
    console.log('child after content checked is called');
  }

  public ngAfterViewInit(): void {
    console.log('child after view init is called');
  }

  public ngAfterViewChecked(): void {
    console.log('after view chechked is called ');
  }

  public ngOnDestroy(): void {
    console.log('child on destroy is called');
  }

  @Input() name!: string;

  @Output() emitdata = new EventEmitter<string>();
}
