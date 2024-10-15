import { COMMENTS_PER_PAGE, URL_API } from "../../../api/api";



export const getComments = async (page = 1) => {
  const response = await fetch(`${URL_API}/comments?_page=${page}&_limit=${COMMENTS_PER_PAGE}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  const totalCount = parseInt(response.headers.get('x-total-count') || '0', 10);
  return { data, totalCount };
};

export const getComment = async (id: string) => {
  const response = await fetch(`${URL_API}/comments/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}