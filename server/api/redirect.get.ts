export default defineEventHandler(async (event) => {
  await sendRedirect(event, "/path/redirect/to", 302);
});
