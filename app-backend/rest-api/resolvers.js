


function configuration(args) {
  return  [ {
    key: "Color",
    value: "#222"
  }];
}

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    configuration: (root, args) => configuration()
  },
};
