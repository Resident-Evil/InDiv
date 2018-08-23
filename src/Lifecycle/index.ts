export interface OnInit {
  nvOnInit(): void;
}

export interface BeforeMount {
  nvBeforeMount(): void;
}

export interface AfterMount {
  nvAfterMount(): void;
}

export interface OnDestory {
  nvOnDestory(): void;
}

export interface HasRender {
  nvHasRender(): void;
}

export interface WatchState {
  nvWatchState(oldData?: any, newData?: any): void;
}

export interface RouteChange {
  nvRouteChange(lastRoute?: string, newRoute?: string): void;
}

export interface ReceiveProps {
  nvReceiveProps(nextProps: any): void;
}
