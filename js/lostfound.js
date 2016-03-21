/**
 * Created by Terry5 on 16/3/19.
 */


/**
 *
 * # 将丢失信息存入数据库
 *
 * @param info 详细描述
 * @param lost_time 丢失时间
 * @param location 丢失地点
 * @param people 称呼
 * @param phone 联系方式
 */
function lostSave(info,lost_time,location,people,phone,img_url) {
    //创建LostInfo类和实例
    var LostInfo = Bmob.Object.extend("lost_info");
    var lost = new LostInfo();
    lost.save({
        info: info,
        lost_time: lost_time,
        location: location,
        people: people,
        phone: phone,
        img_url: img_url,
        submit_time: Math.round(new Date().getTime()/1000)
    }, {
        success: function(lost) {
        },
        error: function(lost, error) {
        }
    });
}

/**
 * 将捡到信息存入数据库
 * @param info 详细描述
 * @param found_time 发现时间
 * @param location 发现地点
 * @param people 称呼
 * @param phone 联系方式
 */
function foundSave(info,found_time,location,people,phone,img_url) {
    //创建FoundInfo类和实例
    var FoundInfo = Bmob.Object.extend("found_info");
    var found = new FoundInfo();
    found.save({
        info: info,
        found_time: found_time,
        location: location,
        people: people,
        phone: phone,
        img_url: img_url,
        submit_time: Math.round(new Date().getTime()/1000)
    }, {
        success: function(found) {
            console.log('Success!');
        },
        error: function(found, error) {
            console.log('error!');
        }
    });
}