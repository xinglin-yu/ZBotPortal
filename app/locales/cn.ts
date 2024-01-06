import { SubmitKey } from "../store/config";

const cn = {
  WIP: "该功能仍在开发中……",
  Error: {
    Unauthorized:
      "访问密码不正确或为空，请前往[登录](/#/auth)页输入正确的访问密码，或者在[设置](/#/settings)页填入你自己的 OpenAI API Key。",
  },
  Auth: {
    Title: "需要密码",
    Tips: "管理员开启了密码验证，请在下方填入访问码",
    Input: "在此处填写访问码",
    Confirm: "确认",
    Later: "稍后再说",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} 条对话`,
  },
  Chat: {
    SubTitle: (count: number) => `共 ${count} 条对话`,
    Actions: {
      ChatList: "查看消息列表",
      CompressedHistory: "查看压缩后的历史 Prompt",
      Export: "导出聊天记录",
      Copy: "复制",
      Stop: "停止",
      Retry: "重试",
      Pin: "固定",
      PinToastContent: "已将 2 条对话固定至预设提示词",
      PinToastAction: "查看",
      Delete: "删除",
      Edit: "编辑",
      Play: "播放",
      AudioPlay: "语音播放",
      VideoPlay: "数字人播放",
    },
    Commands: {
      new: "新建聊天",
      newm: "从面具新建聊天",
      next: "下一个聊天",
      prev: "上一个聊天",
      clear: "清除上下文",
      del: "删除聊天",
    },
    InputActions: {
      Stop: "停止响应",
      ToBottom: "滚到最新",
      Theme: {
        auto: "自动主题",
        light: "亮色模式",
        dark: "深色模式",
      },
      Prompt: "快捷指令",
      Masks: "所有面具",
      Clear: "清除上下文",
      Settings: "对话设置",
    },
    Rename: "重命名对话",
    Typing: "正在输入…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} 发送`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "，Shift + Enter 换行";
      }
      // return inputHints + "，/ 触发补全，: 触发命令";
      return inputHints + "，/ 快捷指令，: 触发命令";
    },
    Send: "发送",
    Config: {
      Reset: "清除记忆",
      SaveAs: "存为面具",
    },
  },
  Export: {
    Title: "分享聊天记录",
    Copy: "全部复制",
    Download: "下载文件",
    Share: "分享到 ShareGPT",
    MessageFromYou: "来自你的消息",
    MessageFromChatGPT: "来自 ChatGPT 的消息",
    Format: {
      Title: "导出格式",
      SubTitle: "可以导出 Markdown 文本或者 PNG 图片",
    },
    IncludeContext: {
      Title: "包含面具上下文",
      SubTitle: "是否在消息中展示面具上下文",
    },
    Steps: {
      Select: "选取",
      Preview: "预览",
    },
  },
  Select: {
    Search: "搜索消息",
    All: "选取全部",
    Latest: "最近几条",
    Clear: "清除选中",
  },
  Memory: {
    Title: "历史摘要",
    EmptyContent: "对话内容过短，无需总结",
    Send: "自动压缩聊天记录并作为上下文发送",
    Copy: "复制摘要",
    Reset: "[unused]",
    ResetConfirm: "确认清空历史摘要？",
  },
  Home: {
    NewChat: "自由对话",
    MaskChat: "角色对话",
    DeleteChat: "确认删除选中的对话？",
    DeleteToast: "已删除会话",
    Revert: "撤销",
  },
  Settings: {
    Title: "设置",
    SubTitle: "所有设置选项",

    UserLogin: {
      Title: "当前已登录",
      Button: "去个人中心",
      LoginCenter: {
        Title: "用户个人中心",
        Email: {
          Title: "邮箱*",
        },
        NickName: {
          Title: "昵称*",
        },
        Occupation: {
          Title: "职业*",
        },
        Avatar: {
          Title: "头像*",
        },
        Inviter: {
          Title: "邀请人邮箱",
        },
        SaveButton: "保存修改",
        SubmitButton: "退出登录",
        SubmitToast: {
          NullNickName: "昵称不能为空",
          NullOccupation: "职业不能为空",
          Success: "修改成功",
          Failed: "更新失败, 请重新尝试",
          NotRegister: "当前未注册",
          NotLogin: "当前未登录",
          LoginOut: "退出登录成功",
        },
      },
    },
    UserNotLogin: {
      Title: "当前未登录",
      Button: "去登录",
      LoginCenter: {
        Title: "用户登录中心",
        Email: {
          Title: "邮箱*",
        },
        EmailVerify: {
          Title: "邮箱验证码*",
          Button: "发送验证码",
        },
        LoginButton: "登录",
        RegisterButton: "注册",
        LoginToast: {
          Success: "登录成功，欢迎回来！",
          Failed: "登录失败, 请重新尝试",
          NotRegister: "邮箱尚未注册, 请先注册",
          EmailInvalid: "邮箱格式错误, 请重新输入",
          EmailVerifyInvalid: "邮箱验证码错误, 请重新输入",
          EmailEmpty: "邮箱不能为空",
          EmailVerifyEmpty: "邮箱验证码不能为空",
        },
      },
      RegisterCenter: {
        Title: "用户注册中心",
        Email: {
          Title: "邮箱*",
        },
        EmailVerify: {
          Title: "邮箱验证码*",
          Button: "发送验证码",
        },
        NickName: {
          Title: "昵称*",
        },
        Occupuation: {
          Title: "职业",
        },
        Inviter: {
          Title: "邀请人邮箱",
          SubTitle: (baseCoins: number) =>
            `可选, 邀请人和被邀请人均可获取${baseCoins}AI币`,
        },
        RegisterButton: "注册",
        RegisterToast: {
          Success: "注册成功，欢迎回来！",
          Failed: "注册失败, 请重新尝试",
          HasRegister: "该邮箱已被注册, 请重新输入",
          EmailInvalid: "邮箱格式错误, 请重新输入",
          EmailVerifyInvalid: "邮箱验证码错误, 请重新输入",
          EmailEmpty: "邮箱不能为空",
          EmailVerifyEmpty: "邮箱验证码不能为空",
          NickNameEmpty: "昵称不能为空",
          OccupationEmpty: "职业不能为空",
        },
      },
    },
    UserBalance: {
      Title: "余额中心",
      Button: "去余额中心",
      BalanceCenter: {
        Title: "用户余额中心",
        AccountBalance: {
          Title: "账户余额",
          BaseCoins: {
            Title: "AI币",
            // Title: "基础AI币余额",
            // SubTitle: "(不会清空)",
          },
          LimitCoins: {
            Title: "限时AI币",
            // SubTitle: "(限时1天, 0点清空)",
            SubTitle: "(0点清空)",
          },
          TotalDialogs: {
            Title: "总对话次数",
            // SubTitle: "(每条对话消耗1个AI币, 先限时币, 再基础币)",
          },
          TotalSignDays: {
            Title: "总签到天数",
            SubTitle: (baseCoins: number, limitCoins: number) =>
              `签到领${baseCoins}基础AI币,${limitCoins}限时AI币`,
            // `每日签到领取${baseCoins}个基础AI币,${limitCoins}个限时AI币`,
          },
        },
        SignState: {
          Signed: {
            Title: "今日签到状态",
            State: "已签到",
            Button: "不可重复签到",
          },
          NotSigned: {
            Title: "今日签到状态",
            State: "尚未签到",
            Button: "去签到",
          },
          SignToast: {
            Success: "签到成功",
            Failed: "签到失败, 请重新尝试",
            NotRegister: "邮箱尚未注册, 请先注册",
            HasSigned: "今日已签到, 请勿重复签到",
          },
        },
        CoinDescription: {
          Title: "AI币说明",
          Rule1: "- 新用户会得到50个基础AI币",
          // Rule1: "- 新用户注册时, 赠送20个基础AI币",
          Rule2: "- 邀请用户时, 双方得到5个基础AI币",
          Rule3: "- AI文本对话：1个AI币/次",
          Rule4: "- AI播放语音：5个AI币/分钟（文本转语音）",
          Rule5: "- AI听演讲：15个AI币/分钟（语音转文本）",
          Rule6: "- AI数字人视频：300个AI币/分钟",
        },
      },
    },
    AvatarVideo: {
      Title: "数字人视频",
      MaxWords: {
        Title: "播放字数",
        SubTitle: "生成视频时的播放字数, -1表示无限制字数. 注:1个字消耗1个AI币",
      },
      PreviewCost: {
        Title: "预览AI币消耗",
        SubTitle:
          "当生成数字人视频时, 弹窗预览AI币的消耗. 可在·设置·中关闭/开启",
      },
    },

    About: {
      Title: "关于我们",
      Button: "详情",
      Introduction: (appTitle: string) =>
        `
      欢迎来到${appTitle}！

      ${appTitle} 基于GPT3.5开发, 主要用辅助演讲, 如即兴演讲, 备稿演讲.
    
      我们非常重视用户隐私和数据安全。在使用${appTitle}时，我们不会后台存储或分析用户的聊天记录。
  
      有任何问题或建议，欢迎通过 ***设置->反馈我们*** 联系我们。我们会尽快回复。
      `,
    },
    FeedBack: {
      Title: "反馈我们",
      Button: "反馈",
      FeedBackCenter: {
        Title: "用户反馈中心",
        Email: "邮箱*",
        Head: "标题*",
        Description: "详细描述*",
        Phone: "联系方式",
        SubmitButton: "提交",
        FeedBackToast: {
          Success: "反馈成功",
          Failed: "反馈失败, 请重新尝试",
          EmailInvalid: "邮箱格式错误, 请重新输入",
          EmailEmpty: "邮箱不能为空",
          HeadEmpty: "标题不能为空",
          DescriptionEmpty: "详细描述不能为空",
        },
      },
    },

    Danger: {
      Reset: {
        Title: "重置所有设置",
        SubTitle: "重置所有设置项回默认值",
        Action: "立即重置",
        Confirm: "确认重置所有设置？",
      },
      Clear: {
        Title: "清除所有数据",
        SubTitle: "清除所有聊天、设置数据",
        Action: "立即清除",
        Confirm: "确认清除所有聊天、设置数据？",
      },
    },
    Lang: {
      // Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      Name: "语言", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      SubName: "仅影响界面显示, 不影响对话结果，也不影响角色面具",
      All: "所有语言",
    },
    Avatar: "头像",
    FontSize: {
      Title: "字体大小",
      SubTitle: "聊天内容的字体大小",
    },

    InputTemplate: {
      Title: "用户输入预处理",
      SubTitle: "用户最新的一条消息会填充到此模板",
    },

    Update: {
      Version: (x: string) => `当前版本：${x}`,
      IsLatest: "已是最新版本",
      CheckUpdate: "检查更新",
      IsChecking: "正在检查更新...",
      FoundUpdate: (x: string) => `发现新版本：${x}`,
      GoToUpdate: "前往更新",
    },
    SendKey: "发送键",
    Theme: "主题",
    TightBorder: "无边框模式",
    SendPreviewBubble: {
      Title: "预览气泡",
      SubTitle: "在预览气泡中预览 Markdown 内容",
    },
    Mask: {
      Title: "面具启动页",
      SubTitle: "新建聊天时，展示面具启动页",
    },
    Prompt: {
      Disable: {
        Title: "禁用提示词自动补全",
        SubTitle: "在输入框开头输入 / 即可触发自动补全",
      },
      List: "自定义提示词列表",
      ListCount: (builtin: number, custom: number) =>
        `内置 ${builtin} 条，用户定义 ${custom} 条`,
      Edit: "编辑",
      Modal: {
        Title: "提示词列表",
        Add: "新建",
        Search: "搜索提示词",
      },
      EditModal: {
        Title: "编辑提示词",
      },
    },
    HistoryCount: {
      Title: "附带历史消息数",
      SubTitle: "每次请求携带的历史消息数",
    },
    CompressThreshold: {
      Title: "历史消息长度压缩阈值",
      SubTitle: "当未压缩的历史消息超过该值时，将进行压缩",
    },
    Token: {
      Title: "API Key",
      SubTitle: "使用自己的 Key 可绕过密码访问限制",
      Placeholder: "OpenAI API Key",
    },

    Usage: {
      Title: "余额查询",
      SubTitle(used: any, total: any) {
        return `本月已使用 $${used}，订阅总额 $${total}`;
      },
      IsChecking: "正在检查…",
      Check: "重新检查",
      NoAccess: "输入 API Key 或访问密码查看余额",
    },
    AccessCode: {
      Title: "访问密码",
      SubTitle: "管理员已开启加密访问",
      Placeholder: "请输入访问密码",
    },
    Endpoint: {
      Title: "接口地址",
      SubTitle: "除默认地址外，必须包含 http(s)://",
    },
    Model: "模型 (model)",
    Temperature: {
      Title: "随机性 (temperature)",
      SubTitle: "值越大，回复越随机",
    },
    TopP: {
      Title: "核采样 (top_p)",
      SubTitle: "与随机性类似，但不要和随机性一起更改",
    },
    MaxTokens: {
      Title: "单次回复限制 (max_tokens)",
      SubTitle: "单次交互所用的最大 Token 数",
    },
    PresencePenalty: {
      Title: "话题新鲜度 (presence_penalty)",
      SubTitle: "值越大，越有可能扩展到新话题",
    },
    FrequencyPenalty: {
      Title: "频率惩罚度 (frequency_penalty)",
      SubTitle: "值越大，越有可能降低重复字词",
    },
  },
  Store: {
    DefaultTopic: "新的聊天",
    BotHello: "有什么可以帮你的吗",
    Error: "出错了，稍后重试吧",
    Prompt: {
      History: (content: string) => "这是历史聊天总结作为前情提要：" + content,
      Topic:
        "使用四到五个字直接返回这句话的简要主题，不要解释、不要标点、不要语气词、不要多余文本，如果没有主题，请直接返回“闲聊”",
      Summarize:
        "简要总结一下对话内容，用作后续的上下文提示 prompt，控制在 200 字以内",
    },
  },
  Copy: {
    Success: "已写入剪切板",
    Failed: "复制失败，请赋予剪切板权限",
  },
  Context: {
    Toast: (x: any) => `包含 ${x} 条预设提示词`,
    Edit: "当前对话设置",
    Add: "新增预设对话",
    Clear: "上下文已清除",
    Revert: "恢复上下文",
  },
  Plugin: {
    Name: "插件",
  },
  Mask: {
    Name: "面具",
    Page: {
      Title: "角色选择",
      SubTitle: (count: number) => `${count} 个预设角色定义`,
      Search: "搜索角色",
      Create: "新建",
    },
    Item: {
      Info: (count: number) => `包含 ${count} 条预设对话`,
      Chat: "对话",
      View: "查看",
      Edit: "编辑",
      Delete: "删除",
      DeleteConfirm: "确认删除？",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `编辑预设面具 ${readonly ? "（只读）" : ""}`,
      Download: "下载预设",
      Clone: "克隆预设",
    },
    Config: {
      Avatar: "角色头像",
      Name: "角色名称",
      Sync: {
        Title: "使用全局设置",
        SubTitle: "当前对话是否使用全局模型设置",
        Confirm: "当前对话的自定义设置将会被自动覆盖，确认启用全局设置？",
      },
      HideContext: {
        Title: "隐藏预设对话",
        SubTitle: "隐藏后预设对话不会出现在聊天界面",
      },
    },
  },
  NewChat: {
    Return: "返回",
    Skip: "直接开始",
    NotShow: "不再展示",
    ConfirmNoShow: "确认禁用？禁用后可以随时在设置中重新启用。",
    Title: "挑选一个面具",
    SubTitle: "现在开始，与面具背后的灵魂思维碰撞",
    More: "查看全部",
  },

  UI: {
    Confirm: "确认",
    Cancel: "取消",
    Close: "关闭",
    Create: "新建",
    Edit: "编辑",
  },
  Exporter: {
    Model: "模型",
    Messages: "消息",
    Topic: "主题",
    Time: "时间",
  },
};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type LocaleType = typeof cn;
export type PartialLocaleType = DeepPartial<typeof cn>;

export default cn;
