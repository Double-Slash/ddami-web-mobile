import axios from 'axios';

export const requestHandler = async (params) => {
  try {
    const { path, ...args } = params
    const config = {
      ...args,
      url: 'http://222.251.129.150' + path,
      timeout: 5000,
      headers: params.headers ? params.headers : {}
    }
    const data = await axios(config)
    return successHandler(data)
  } catch (e) {
    errorHandler(e)
  }
}

export function successHandler(response) {
  console.log('[Response Data]: ')
  console.log(response.status, response.data)
  return response
}

function errorHandler(e) {
  console.log('-----------------------------------------------------')
  console.log(`[Error]: ${JSON.stringify(e, null, 2)}`)
  throw e
}
