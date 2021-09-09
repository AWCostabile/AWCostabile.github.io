export const setValue = <
  Model extends Record<string, unknown>,
  State extends Record<string, Model> = Record<string, Model>
>(
  state: State,
  id: string,
  next: Partial<Model>
) => ({ ...state, [id]: { ...state[id], ...next } });
