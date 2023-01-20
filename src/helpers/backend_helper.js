import { post } from "./api_helper"
import * as url from "./url_helper"

const postAuthLogin = data => {
  return post(url.POST_LOGIN, data)
}

export {
  postAuthLogin
}