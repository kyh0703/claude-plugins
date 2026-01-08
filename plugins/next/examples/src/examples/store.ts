import { createStore } from '../lib/store'

interface ExampleState {
  value: boolean
  actions: {
    setValue: (value: boolean) => void
  }
}

export const useExampleStore = createStore<ExampleState>(
  (set) => ({
    value: false,
    actions: {
      setValue: (value) =>
        set((state) => {
          state.value = value
        }),
    },
  }),
  {
    name: 'auth',
  },
)

export const useExampleValue = () => useExampleStore((state) => state.value)
export const useExampleActions = () => useExampleStore((state) => state.actions)
