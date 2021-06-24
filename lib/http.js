// lib/http.js

// 通过 axios 处理请求
const axios = require('axios')

axios.interceptors.response.use(res => {
  return res.data;
})

let token = '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'

/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
  console.log('facebook ====> ');
  return axios.get('https://api.github.com/orgs/zhurong-cli/repos', {
    headers: {
        'Authorization': 'token' + token,
    },
})
}
/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function  getTagList(repo) {
  console.log(repo);
  return axios.get(`https://api.github.com/repos/zhurong-cli/${repo}/tags`, {
    headers: {
        'Authorization': 'token' + token,
    }
  }
  )
}

module.exports = {
  getRepoList,
  getTagList
}
