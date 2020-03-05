import { Sol } from '../model/sol.model';

export class SolState {
  public error: string;
  public sols: Sol[];
  public isLoading = false;

  private constructor(sols: Sol[], error: string, isLoading: boolean) {
    this.sols = sols;
    this.error = error;
    this.isLoading = isLoading;
  }

  static initial(): SolState {
    return new SolState([], null, false);
  }

  static loading(): SolState {
    return new SolState([], null, true);
  }

  static loaded(data: Sol[]) {
    return new SolState(data, null, false);
  }

  static error(error: any) {
    return new SolState([], error, false);
  }


  get isEmpty() {
    return this.sols.length === 0;
  }

  get hasError() {
    return this.error !== null;
  }

}
