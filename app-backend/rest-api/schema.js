const schema = `

type Query {
    configuration: [ConfigurationItem!]
}

type ConfigurationItem  {
    key: String!
    value: String
}


schema {
    query: Query
}`;

// eslint-disable-next-line import/prefer-default-export
export { schema };
