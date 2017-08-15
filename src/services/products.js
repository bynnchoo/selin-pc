import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  console.log("service product fetch:"+page);
  return request(`/products?_page=${page}&_limit=${PAGE_SIZE}`);
}

export function remove(id) {
  return request(`/products/${id}`, {
    method: 'DELETE',
  });
}

export function patch(id, values) {
  console.log("product path");
  return request(`/products/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/products', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
