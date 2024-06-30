export const pages = [{ title: 'Landing', value: '/' }];

export const pagesWithOutSlash = removeSlashFromArray(pages);
function removeSlashFromArray(arr: typeof pages) {
  return arr
    .map(({ value }) => value.replace(/^\//, ''))
    .filter((item) => item !== '');
}
