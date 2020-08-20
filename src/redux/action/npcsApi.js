import { actions } from './npcActions';
import fetch from 'cross-fetch';
import { pathOr } from 'ramda';
import { url } from './constants';

export const actionTypes = {
  get: 'get call',
  delete: 'delete npcs',
  create: 'create npc',
};

const getApiRequestInfo = (type, body) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };
  switch (type) {
    case actionTypes.get:
      return {
        url: `${url}npc/`,
        options: {
          ...defaultOptions,
          method: 'GET',
        },
        dispatch: true,
      };
    case actionTypes.delete:
      return {
        url: `${url}npc/delete-npcs/`,
        options: {
          ...defaultOptions,
          method: 'DELETE',
        },
      };
    case actionTypes.create:
      return {
        url: `${url}npc/create-npc/`,
        options: {
          ...defaultOptions,
          method: 'POST',
          body: JSON.stringify(body),
        },
      };
    default:
      return {};
  }
};

export function npcsApi(type, body = {}) {
  return function (dispatch) {
    const requestInfo = getApiRequestInfo(type, body);
    if (requestInfo.dispatch) {
      dispatch(
        actions.UPDATE_NPC_LIST_ACTION({
          isFetching: true,
        })
      );
    }
    return fetch(requestInfo.url, requestInfo.options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return requestInfo.dispatch
          ? dispatch(actions.UPDATE_NPC_LIST_ACTION(json))
          : console.log(json);
      })
      .catch((error) => {
        console.log('ERROR!', error);
      });
  };
}
export const getreducerName = pathOr([], ['reducerNameReducer', 'stateKey']);
export default npcsApi;
