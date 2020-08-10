export const getPostIdFromUrl = (url) =>
  url.substring(url.lastIndexOf('/') + 1);

export const isPostListView = (postListVisibility) => {
  if (postListVisibility === 'list') {
    return true;
  } else {
    return false;
  }
};
