/**
 * 日历
 * 选填：传入日期  格式"xxxx-xx-xx" 默认为今天
 *      最大日期  格式"xxxx-xx-xx"
 *      最小日期  格式"xxxx-xx-xx"
 * @returns {Function}
 */

var Calendar = React.createClass{
    getDefaultProps: function () {
        return {
            curPage: 0,
            pageNum: 10,
            pageCount: 0,
            itemCount: 0,
            pageCallback: function () {
            }
        };
    },
};

module.exports = Calendar;
export default Calendar;