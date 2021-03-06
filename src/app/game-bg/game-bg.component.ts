import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { fromEvent, of, merge, BehaviorSubject, Observable, Subscription } from 'rxjs';
import { expand, filter, map, share, tap, withLatestFrom } from 'rxjs/operators';

import { AnimationService } from '../animation.service';

import { IFrameData } from './frame.interface';
import { clampTo30FPS } from './game.util';

import { boundariesType, gameStateObj } from '../animation.service';
import { WindowService } from '../window.service';

@Component({
  selector: 'app-game-bg',
  templateUrl: './game-bg.component.html',
  styleUrls: ['./game-bg.component.css']
})
export class GameBgComponent implements AfterViewInit {
  @ViewChild('gameArea') gameArea: ElementRef;
  bgColor: string;
  boundaries: boundariesType = {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  };
  ctx: CanvasRenderingContext2D;
  frames: Subscription;
  mouseAction: Subscription;
  mouseClicked = false;
  mousePos = { x: 500, y: 500 };
  resize: Subscription;

  constructor(private animationService: AnimationService, private windowService: WindowService) { }

  ngOnInit() {
    // triggered before DOM updates
    this.bgColor = this.animationService.getBgColor();
    this.ctx = (<HTMLCanvasElement>this.gameArea.nativeElement).getContext('2d');

    const mouseClick$ = fromEvent(window, 'click');
    const mouseMove$ = fromEvent(window, 'mousemove');
    
    this.mouseAction = merge(mouseClick$, mouseMove$)
      .subscribe((e: MouseEvent) => {
      if (e.type === 'click') {
        this.mouseClicked = true;
      }
      this.mousePos = { x: e.clientX, y: e.clientY };
    });
    this.animationService.getCustomInit(this.ctx);
  }

  ngAfterViewInit() {
    this.updateDimensions();
    this.resize = merge(fromEvent(window, 'resize'), fromEvent(window, 'orientationChange'))
      .subscribe(() => {
      this.updateDimensions();
    });

    // run game
    this.frames = this.frames$.pipe(
      withLatestFrom(this.gameState$),
      map(([deltaTime, gameState]) => this.update(deltaTime, gameState)),
      tap(gameState => this.gameState$.next(gameState))
    ).subscribe(gameState => {
      this.render(gameState);
    });
  }

  calculateStep(prevFrame: IFrameData): Observable<IFrameData> {
    return Observable.create(observer => {
      requestAnimationFrame(frameStartTime => {
        const deltaTime = prevFrame 
          ? (frameStartTime - prevFrame.frameStartTime) / 1000
          : 0;
        
        observer.next({
          frameStartTime,
          deltaTime
        });
      });
    })
    .pipe(
      map(clampTo30FPS)
    );
  }

  frames$ = of(undefined)
    .pipe(
      // emits value of calculateStep
      expand(val => this.calculateStep(val)),
      filter(frame => frame !== undefined),
      map((frame: IFrameData) => frame.deltaTime),
      share()
    );

  gameState$ = new BehaviorSubject({});

  render(state: gameStateObj) {
    this.animationService.getRender(this.ctx, state);
  };

  update(deltaTime: number, state: gameStateObj): gameStateObj {
    const click = this.mouseClicked;

    if (click) {
      this.mouseClicked = false;
    }

    return this.animationService.getUpdate(this.boundaries, deltaTime,
      click, this.mousePos, state);
  }

  updateDimensions() {
    this.gameArea.nativeElement.width = this.boundaries.right = this.windowService.getWidth();
    this.gameArea.nativeElement.height = this.boundaries.bottom = this.windowService.getHeight();
    // console.log(this.windowService.getWidth() + ' x ' + this.windowService.getHeight() + '\n')
  }

  ngOnDestroy() {
    this.frames.unsubscribe();
    this.mouseAction.unsubscribe();
    this.resize.unsubscribe();
  }
}
