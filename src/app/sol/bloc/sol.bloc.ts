import { BehaviorSubject } from 'rxjs';
import { SolState } from './sol.state';
import { SolService } from '../sol.service';
import { SolEvent } from './sol.event';

export class SolBloc {
  private solsState$: BehaviorSubject<SolState>;

  constructor(private solService: SolService) {
    this.solsState$ = new BehaviorSubject<SolState>(SolState.initial());
  }

  get bloc() {
    return this.solsState$.asObservable();
  }

  dispath(event: SolEvent) {
    this.onEvent(event);
  }

  private onEvent(event: SolEvent) {
    if (event === SolEvent.FETCH) {
      this.pushState(SolState.loading());

      this.solService.getSols()
      .subscribe(data => {
        this.pushState(SolState.loaded(data));
      },
       err => {
        this.pushState(SolState.error(err));
       });
    }
  }

  private pushState(state: SolState) {
    this.solsState$.next(state);
  }

}
