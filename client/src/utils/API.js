//works from Insomnia
// works from React to Backend
export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  //works from Insomnia
  //Works from React to Backend
  export const login = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };

  export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
  //Works from Insomnia
  export const getUsers = () => {
    return fetch('/api/users', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  // export const getGithubProfile = (email) => {
  //   return fetch('/api/users/'+email, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // };