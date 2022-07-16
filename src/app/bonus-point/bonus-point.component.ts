import { Component, OnInit } from '@angular/core';
import { BsJs1Service } from './bs-js1.service';
import { concat, of } from 'rxjs';
import { concatAll, first, tap } from 'rxjs/operators';

@Component({
  selector: 'app-bonus-point',
  templateUrl: './bonus-point.component.html',
  styleUrls: ['./bonus-point.component.css']
})
export class BonusPointComponent implements OnInit {

  constructor(private bsJs1Service: BsJs1Service) { }
  flexboxes = Array(9).fill(`f`);
  grids = Array(7).fill(`g`);
  ngOnInit() {

  }

  redirectToKeiPage() {
    location.href = `${location.protocol}//kei.${location.host}/bonusPoint`
  }

  redirectToAnnPage() {
    location.href = `${location.protocol}//ann.${location.host}/bonusPoint`
  }

  answerCookie1() {
    // Cookie should be properly handled by the server instead
    document.cookie = `Key=c1; SameSite=None; Secure; domain=${location.hostname}; path=/bonusPoint`;
  }

  answerRxjs1() {
    const first$ = of('first' ,  2000).pipe(tap(() => console.log('first')));
    const second$ = of('second', 1500).pipe(tap(() => console.log('second')));
    const third$ = of('thrid', 800).pipe(tap(() => console.log('third')));

    // 考題限制 : 執行順序需為 : first$ => second$ => third$
    // 預期的Console結果 :
    //  first
    //  second
    //  third

    of(first$.pipe(first()), second$.pipe(first()), third$.pipe(first())).pipe(concatAll()).subscribe();
  }


  answerJs1() {
    let result: string = '';
    this.bsJs1Service.getSample()
      .forEachChilds((child) => {
        result += child.value + ` , `;
        const parent = String(child.parent.value);
        if (result.includes(parent)) result = result.replace(parent + ' , ', '');
        result += parent + ` , `;
      });

    // 預期alert的結果 => js 1 answer : child_1_1 , child_1_2 , parent_1 , child_2_1 ,  parent_2 ,child_3_1 , child_3_2 , child_3_3 , parent_3
    alert(`js 1 answer : ${result.trim().replace(/,\s*$/, "")}`);
  }

}
