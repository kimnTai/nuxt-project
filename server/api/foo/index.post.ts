export default defineEventHandler((_event) => {
  return { message: "处理`api/foo`端点的POST请求" };
});
