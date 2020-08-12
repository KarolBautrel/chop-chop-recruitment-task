export const getPostIdFromUrl = (url) =>
  url.substring(url.lastIndexOf('/') + 1);

export const isPostListView = (postListVisibility) => {
  if (postListVisibility === 'list') {
    return true;
  } else {
    return false;
  }
};

export const getCurrentPageNumber = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const currentPage = parseInt(searchParams.get('page'), 10);

  return currentPage;
};
