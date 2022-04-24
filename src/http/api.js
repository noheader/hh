/**
 * 项目业务请求接口
 */

import request from './request'

export function LoginApi(data) {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}
