export const userLogin = (user) => {
  return {
    type: 'USER_LOGIN',
    value: user
  }
}

export const userLogout = (user) => {
  return {
    type: 'USER_LOGOUT',
    value: user
  }
}

export const addEntry = (newEntry) => {
  return {
    type: 'ADD_ENTRY',
    value: newEntry
  }
}

export const deleteEntry = (index) => {
  return {
    type: 'DELETE_ENTRY',
    value: index
  }
}



export const fetchMovieQuotes = () => {
  return 
}