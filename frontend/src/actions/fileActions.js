import axios from 'axios'

export const getFile = (name) => async () => {
  alert(name)
  // await axios.get(`/api${name}`)
}
