export default defineEventHandler((event) => {
  const id = parseInt(`${event.context.params?.id}`);

  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer",
    });
  }

  setResponseStatus(event, 202);

  return { message: "All good" };
});
