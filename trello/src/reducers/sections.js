import sections from '../stubs/sections';

export default function sectionsReducer(state = sections, action) {
  switch (action.type) {
    case 'MOVE_CARD':
      return state;
    default:
      return state;
  }
}

export function moveCard(payload) {
  return {
    type: 'MOVE_CARD',
    payload,
  }
}
