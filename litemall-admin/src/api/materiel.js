import request from '@/utils/request'

export function listBrand(query) {
  return request({
    url: '/brand/list',
    method: 'get',
    params: query
  })
}
// 提交方查询
export function queryList(query) {
  return request({
    url: '/drug/application/findByLab',
    method: 'get',
    params: query
  })
}
// 中转站查询
export function getDrugList(query) {
  return request({
    url: '/drug/application/list',
    method: 'get',
    params: query
  })
}
// 学校列表
export function schoolList(data) {
  return request({
    url: '/drug/address/school',
    method: 'get',
    params: data
  })
}
// 校区列表
export function schoolZone(data) {
  return request({
    url: '/drug/address/zone',
    method: 'get',
    params: data
  })
}
// 实验室列表
export function laboratoryList(data) {
  return request({
    url: '/drug/address/laboratory',
    method: 'get',
    params: data
  })
}
// 模糊搜索
export function searchList(data) {
  return request({
    url: '/drug/dic/query',
    method: 'get',
    // method: 'post',
    params: data
    // data
  })
}
// 提交方新增
export function materielAdd(data) {
  return request({
    url: '/drug/dic/add',
    method: 'post',
    data
  })
}

export function sureStatus(data) {
  return request({
    url: '/brand/delete',
    method: 'post',
    data
  })
}
// 提交方保存
export function saveStatus(data) {
  return request({
    url: '/drug/application/confirm',
    method: 'post',
    data
  })
}
// 提交方提交
export function drugCommit(data) {
  return request({
    url: '/drug/application/commit',
    method: 'post',
    data
  })
}

export function createBrand(data) {
  return request({
    url: '/brand/create',
    method: 'post',
    data
  })
}

export function readBrand(data) {
  return request({
    url: '/brand/read',
    method: 'get',
    data
  })
}

export function updateBrand(data) {
  return request({
    url: '/brand/update',
    method: 'post',
    data
  })
}

export function deleteBrand(data) {
  return request({
    url: '/brand/delete',
    method: 'post',
    data
  })
}
