import {PageContext} from 'vike/dist/esm/shared/types';

export {data};

async function data(pageContext: PageContext) {
  return {
    hello: 'boonman',
  }
}