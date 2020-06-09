import { helper } from '@ember/component/helper';

export default helper(function formatDate(date) {
  return date.toLocaleString();
});
