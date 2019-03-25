


function configuration(args) {
  return  [ {
    key: "Color",
    value: "#f00"
  }];
}

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    configuration: (root, args) => configuration()
  },
};
