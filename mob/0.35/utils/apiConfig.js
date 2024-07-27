const BASE_URL = 'https://vivalibro.com:3002';

const API_ENDPOINTS = {
  UPLOAD_IMAGE: `${BASE_URL}/upload/book/img`,
  GET_BY_ID: (table,id) => `${BASE_URL}/${table}/${id}`,
  EDIT: (table) => `${BASE_URL}/edit/${table}`,
  LOGIN: `${BASE_URL}/login`,
  SIGNUP: `${BASE_URL}/signup`,
  NEWBOOK: `${BASE_URL}/newbook`,
  BOOKUSER: `${BASE_URL}/bookuser`,
  LOOKUP: (type) => `${BASE_URL}/lookup/${type}`,
  LOOKUPSAVE: (table) => `${BASE_URL}/lookupsave/${table}`,
  GET_BOOKS_BY_LIB: (libid) => `${BASE_URL}/lib/${libid}`,
  
  // Add more endpoints as needed
  // e.g., GET_BOOKS: `${BASE_URL}/books`,
  //       UPDATE_BOOK: `${BASE_URL}/books/update`,
};

export default API_ENDPOINTS;