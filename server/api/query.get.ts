export default defineEventHandler((event) => {
  const query = getQuery(event);

  return { foo: query.foo, baz: query.baz };
});
