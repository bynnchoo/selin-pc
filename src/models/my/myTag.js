

export default {
  namespace: 'mytags',
  state: {
    checked: true
  },
  reducers: {
    toggle(state,{ payload: checked }) {
      return {checked:checked};
    }
  },
  effects: {

  }
};
