
export interface TypedAction<TAction, TPayload> {
  type: TAction;
  payload: TPayload;
}

