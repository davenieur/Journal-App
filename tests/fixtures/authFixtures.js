export const initialState = {
    status: 'checking', // checking , not-authenticated , authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}
export const authenticatedState = {
    status: 'authenticated', // checking , not-authenticated , authenticated
    uid: '12345',
    email: 'lovely@gmail.com',
    displayName: 'Demo user',
    photoURL: 'https://demo.jpg',
    errorMessage: null,
}
export const notAuthenticatedState = {
    status: 'not-authenticated', // checking , not-authenticated , authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}
export const demoUser = {
    uid: '12345',
    email: 'lovely@gmail.com',
    displayName: 'Demo user',
    photoURL: 'https://demo.jpg'
}