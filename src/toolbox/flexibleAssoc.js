import { pipe, type, cond, equals, assocPath, assoc } from 'ramda';

export default pipe(
  cond([
    [pipe(type, equals('Array')), assocPath],
    [pipe(type, equals('String')), assoc],
  ])
);
