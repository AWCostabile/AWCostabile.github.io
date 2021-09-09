export interface IPrintSegment {
  break: boolean;
  index: number;
  isConcern: boolean;
  isReady: boolean;
  size: number;
}

export interface IPrintSegmentState {
  breaks: IPrintSegment[];
  ready: boolean;
}
