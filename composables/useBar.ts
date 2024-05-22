// 它将作为 useFoo() 可用（文件名的驼峰形式，不包括扩展名）
export default function () {
  return useState(
    "bar",
    () => "bar 它将作为 useFoo() 可用（文件名的驼峰形式，不包括扩展名）"
  );
}
