
const isUserAuthenticated = () => {
   console.log('valueß', localStorage.getItem('isAuthenticated'));
   return localStorage.getItem('isAuthenticated') && true;
}

export{
    isUserAuthenticated
}