import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import { message } from 'antd';

function checkCodeError(res) {
  if(res.status >= 200 && res.status < 300) {
    return res;
  }else {
    res.jsonResult.msg ? message.warning(res.jsonResult.msg) : message.error("当前操作发生了偶然错误");
    return res;
  }
}

function jsonParse(res) {
  return res.json().then(jsonResult => ({ ...res, jsonResult }));
}

function errorMessageParse(res) {
  if(res.jsonResult.errcode) {
    return (res.jsonResult.errcode < 0) ? Promise.reject() : res;
  }else {
    return res;
  }
}

function xFetch(url, options) {

  let opts = { ...options };

  opts.headers = {
    ...opts.headers,
    authorization: cookie.get('authorization') || '',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  return fetch(url, opts)
    .then(checkCodeError)
    .then(jsonParse)
    .then(errorMessageParse)
}

export default xFetch;