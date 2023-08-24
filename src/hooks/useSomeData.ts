export type UseSomeDataParameters = {
  data: {
    foo: string;
    bar: string;
  };
};

export const useSomeData = ({ data }: UseSomeDataParameters) => {
  return `${data.foo} ${data.bar}`;
};
