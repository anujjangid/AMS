import USERS from 'dataSet/user'

const generateUserInfo = id => {
  if (USERS[id]) {
    return USERS[id].name
  }
}

export default generateUserInfo
