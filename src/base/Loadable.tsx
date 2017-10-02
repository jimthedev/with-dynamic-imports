import * as React from 'react';

// Typescript throws warnings here about
// signatures here because we can't know
// what will be returned and Loadable's
// types seem not to be configured in a
// way that makes typescript's compiler
// happy. For now you can ignore or can
// use require instead of import.

//import * as Loadable from 'react-loadable';
const Loadable = require('react-loadable');

const Loading = () => {
    return <div>Loading...</div>
};

export function Loader(opts:any) {
  return Loadable(Object.assign({
    loading: Loading,
    delay: 200,
    timeout: 10,
  }, opts));
};