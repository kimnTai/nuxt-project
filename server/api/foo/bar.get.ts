export default defineEventHandler((_event) => {
  return { message: "处理`api/foo/bar`端点的GET请求" };
});
