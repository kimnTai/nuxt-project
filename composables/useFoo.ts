export const useFoo = () => {
  const nuxtApp = useNuxtApp();
  const bar = useBar();

  return useState("foo", () => {
    return {
      globalName: nuxtApp.globalName,
      bar: bar,
    };
  });
};
