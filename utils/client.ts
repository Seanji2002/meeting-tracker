import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'odo4n8ic',
    dataset: 'production',
    apiVersion: '2022-09-21', // use current UTC date - see "specifying API version"!
    token: process.env.SANITY_AUTH_TOKEN, // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
})

export default client;