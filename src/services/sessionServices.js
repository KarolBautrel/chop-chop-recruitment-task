export const authToken = sessionStorage.getItem('token');

export const removeAuthToken = () => sessionStorage.removeItem('token');
