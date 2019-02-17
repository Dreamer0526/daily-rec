const protocol = window && window.location && window.location.protocol;
const hostname = window && window.location && window.location.hostname;
const port = '8000'

const baseApiPath = `${protocol}//${hostname}:${port}`

export default {
  baseApiPath,
  authorizedApiPath: `${baseApiPath}/api`
}
