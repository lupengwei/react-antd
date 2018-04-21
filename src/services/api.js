import request from '../utils/request';

let g_server_uri = 'http://desp.cq-tct.com';

// 获取整体项目创建情况
export async function getProjectStatusAtGlobal() {
  return request(`${g_server_uri}/api/globalReports/project-status`, {method: 'GET'});
}