import { writable } from 'svelte/store';

interface UIStore {
  setSomething: unknown;
}

const createUIStore = () => {
  const { subscribe, update } = writable<UIStore>({ setSomething: null });

  function setSomething(props: unknown) {
    update((state) => {
      return { ...state, setSomething: props };
    });
  }

  return {
    subscribe,
    setSomething,
  };
};

export const uiStore = createUIStore();
