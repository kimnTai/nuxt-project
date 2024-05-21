// 它将作为randomEntry()可用（文件名的驼峰形式，不包括扩展名）
export default function <T>(array: Array<T>) {
  return array[Math.floor(Math.random() * array.length)];
}
