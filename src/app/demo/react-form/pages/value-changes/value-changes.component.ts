import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime,
  distinctUntilChanged,
  filter,
  Subject,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-value-changes',
  templateUrl: './value-changes.component.html',
  styleUrls: ['./value-changes.component.css']
})
export class ValueChangesComponent implements OnInit, OnDestroy {
 
  messages : string[] = [];

  readonly condition = new FormControl();
  readonly stop$ = new Subject<void>();

  ngOnInit(): void {
    this.condition.valueChanges
      .pipe(
        debounceTime(500),
        filter((condition: string) => !!condition),
        distinctUntilChanged(),
        takeUntil(this.stop$)
      )
      .subscribe({
        next: (condition) => {
            console.log(`查詢條件：${condition}`);
            this.messages.push(condition);
        }
      });
  }

  ngOnDestroy(): void {
    this.stop$.next();
    this.stop$.complete();
  }
}
