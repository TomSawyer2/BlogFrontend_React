/**
 * @author TomSawyer2
 * @date 2021/10/21
 *
 * @brief
 * 1. 时间格式化
 */

/**
 * @description 时间格式化
 * @returns {string} 当前时间，类似2021-10-07 20:24
 */
export function timeFormat(): string {
  var nowDate = new Date();
  var year = nowDate.getFullYear();
  var month =
    nowDate.getMonth() + 1 < 10
      ? '0' + (nowDate.getMonth() + 1)
      : nowDate.getMonth() + 1;
  var day =
    nowDate.getDate() < 10 ? '0' + nowDate.getDate() : nowDate.getDate();
  var hour =
    nowDate.getHours() < 10 ? '0' + nowDate.getHours() : nowDate.getHours();
  var minute =
    nowDate.getMinutes() < 10
      ? '0' + nowDate.getMinutes()
      : nowDate.getMinutes();
  var dateStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
  return dateStr;
}
