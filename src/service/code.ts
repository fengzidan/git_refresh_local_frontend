// 接口校验错误信息
const API_ERROR_CODE = {
  4001: "校验ssoData失败",
  // 4002: "校验ssoData国密loginToken失败",
  4003: "校验ssoData国密safeToken失败",
  4004: "校验ssoData失败,非法参数",
  4005: "校验ssoData失败,非法请求",
  4006: "临时授权信息过期,请重新登录",
  1001: "请求参数有误",
  1002: "登录信息过期，请重新登录",
  1003: "无用户数据，请重新登录",
  1004: "请联系专员或业务员维护当前用户协议号",
  1005: "请先在微信端进行授权",
  1006: "需要手机验证码进行身份认证",
  1007: "您是首次登录，请在全能保app修改密码!",
  1008: "未绑定设备,请在全能保app绑定后登录!",
  1009: "获取游客微信用户信息失败",
  1010: "token失效或不合法token",
  1011: "微信token接口异常",
  1012: "无效验证，拒绝访问",
  1013: "token值缺失，拒绝访问",
  1014: "缺少必要参数",
  1015: "微信js_api_ticket签名异常",
  1016: "用户尚未关注该公众号",
  1017: "需要手机验证码进行身份认证",
  1018: "时间范围参数不能为空!!",
  1019: "时间范围参数不正确!!",
  1020: "时间范围有误!!",
  1021: "【电销渠道】暂不支持分享该产品!!",
  1022: "未配置渠道等信息",
  1023: "该产品暂不支持购买,请联系业务员。",
  1024: "该产品尚未上架或不存在。",
  1025: "参数shareId不能为空。",
  1026: "请先维护个代信息!",
  1027: "视频资源上传失败,请稍后再试!",
  1028: "上传资源不存在",
  1029: "暂不支持该文件上传",
  4010: "请重新登录",
  2000: "SUCCESS",
  4000: "查询失败，服务器异常",
  4002: "无权限！",
  2001: "userID,用户id不能为空",
  2002: "skillID,技能id不能为空",
  2003: "rtnType,返回值类型不能为空",
  2005: "sysCode,系统编码不能为空",
  2004: "rtnType,返回值类型传值为2时，colName，权限绑定字段不能为空",
  2006: "用户不存在",
  2007: "该用户不存在相关技能权限",
  2008: "权限类型不能为空",
  // 200: "SUCCESS",
  201: "系统参数为空！",
  202: "层级菜单id为空！",
  203: "用户id为空！",
  204: "查询菜单异常！",
  205: "请勿重复配置菜单！",
  // 200: "SUCCESS",
  // 201: "次数超限",
};

// 素材
const VIDEO_ERROR_CODE = {
  400: "参数错误，图片地址不能为空！",
  401: "参数错误，适用平台不能为空！",
  402: "参数错误，标题不能为空！",
  403: "参数错误，视频描述不能为空！",
  404: "参数错误，视频地址不能为空！",
  405: "参数错误，请填写起始时间！",
  406: "参数错误，请填写终止时间！",
  407: "参数错误，结束时间不能小于开始时间！",
  408: "sourceId不合法",
  409: "error",
  410: "无效参数:sourceId,无此条数据",
  412: "此状态下不能进行审批操作！",
  413: "此状态下不能进行驳回操作！",
  414: "此状态下不能进行撤回操作！",
  415: "状态不能为空！",
  416: "当前状态无法编辑！",
  417: "参数错误，请填写视频宽高比！",
  418: "您没有编辑权限,此素材仅创建者可编辑",
};

// 菜单
const MENU_ERROR_CODE = {
  400: "error",
  401: "菜单名已存在",
  402: "菜单新增失败",
  403: "菜单删除失败,menuId不能为空",
  404: "菜单删除失败,当前菜单下有子菜单",
  405: "菜单删除失败",
  406: "菜单修改失败，菜单名已存在",
  407: "菜单修改失败",
  408: "菜单查询失败",
  409: "一级菜单查询失败",
  // 409: "请选择一个父级菜单",
  // 409: "二级菜单查询失败",
};

// 标签
const TAG_ERROR_CODE = {
  400: "error",
  401: "当前标签下有子标签,无法删除！",
  402: "保存新增失败,标签名重复",
  403: "保存修改失败,标签名重复",
  404: "保存失败,标签名不能为空",
  405: "已存在10个顶级标签类，无法继续添加",
};

// 用户
const USER_ERROR_CODE = {
  400: "error",
  401: "角色新增，roleId不能为空",
  402: "角色新增，此roleId已存在",
  403: "角色保存失败",
  404: "删除失败,当前角色存在关联菜单",
  405: "角色删除失败",
  406: "分页模糊查询角色失败",
  407: "角色信息查询失败",
  408: "角色删除失败",
  200: "未配置系统权限",
  410: "系统异常，请稍后再试",
};
const CODE_LIST: string[] = Array.from(
  new Set(
    ...Object.keys(API_ERROR_CODE),
    ...Object.keys(VIDEO_ERROR_CODE),
    ...Object.keys(MENU_ERROR_CODE),
    ...Object.keys(TAG_ERROR_CODE),
    ...Object.keys(USER_ERROR_CODE)
  )
);

export default CODE_LIST;
