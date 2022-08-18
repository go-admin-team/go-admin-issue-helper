const compareVersions: any = require("compare-versions");

interface Response {
  status: number;
  statusText: string;
  json(): any;
}

const npmEndpoint = "https://registry.npmmirror.com";
const endpoint = "https://api.github.com";

const npmMapping: { [repo: string]: string } = {
  "go-admin": "go-admin",
  "go-admin-ui": "go-admin-ui",
  "go-admin-core": "go-admin-core"
};

function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(response.statusText);
  }
}

function orderVersions(versions: string[]): string[] {
  const normalVersions: string[] = [];
  const nextVersions: string[] = [];
  versions.forEach(version => {
    if (version.match(/^\d+\.\d+\.\d+$/) || version.includes("-rc.")) {
      normalVersions.push(version);
    } else {
      nextVersions.push(version);
    }
  });

  return [
    ...normalVersions.sort((a: string, b: string) => -compareVersions(a, b)),
    ...nextVersions.sort((a: string, b: string) => -compareVersions(a, b))
  ];
}

export function fetchVersions(repo: string) {
  const npmPromise = fetch(`${npmEndpoint}/${npmMapping[repo]}`)
    .then(checkStatus)
    .then((response: Response) => response.json())
    .then(({ versions }) =>
      Object.keys(versions).filter(ver => !ver.includes("-"))
    )
    .then(versions => orderVersions(versions))
    .then(versions => versions.slice(0, 100));

  var urls = [
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/72966606",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/72966606/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/72966606/assets{?name,label}",
      html_url:
        "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.12",
      id: 72966606,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "RE_kwDODrlrLc4EWWHO",
      tag_name: "v2.0.12",
      target_commitish: "master",
      name: "Release v2.0.12",
      draft: false,
      prerelease: false,
      created_at: "2022-07-27T13:55:59Z",
      published_at: "2022-07-27T14:05:51Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.12",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.12",
      body:
        "FIX🐛: \r\n* 添加bcrypt包的引用\r\n* 修复doc url of cgo\r\n* 修复角色新增、修改时，sys_casbin_rule表drop，然后重新create的问题(#539)\r\n* 修复 UpdatePwd error\r\n* 修复关闭中的job能够启动问题(#638)\r\n\r\nREFACTOR🎨: \r\n* 引入github.com/pkg/errors更好的错误堆栈追踪\r\n\r\n\r\n",
      reactions: {
        url:
          "https://api.github.com/repos/go-admin-team/go-admin/releases/72966606/reactions",
        total_count: 1,
        "+1": 1,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0
      }
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/68036744",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/68036744/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/68036744/assets{?name,label}",
      html_url:
        "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.11",
      id: 68036744,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "RE_kwDODrlrLc4EDiiI",
      tag_name: "v2.0.11",
      target_commitish: "master",
      name: "Release v2.0.11",
      draft: false,
      prerelease: false,
      created_at: "2022-05-27T16:40:06Z",
      published_at: "2022-05-27T16:48:05Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.11",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.11",
      body:
        "FIX🐛:\r\n* Fix the problem that the closed job can start.#638\r\n* Add rolekey data duplicate verification.#649\r\n* Update readme. #629 "
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/61046316",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/61046316/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/61046316/assets{?name,label}",
      html_url:
        "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.10",
      id: 61046316,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "RE_kwDODrlrLc4Do34s",
      tag_name: "v2.0.10",
      target_commitish: "master",
      name: "Release v2.0.10",
      draft: false,
      prerelease: false,
      created_at: "2022-03-05T03:54:10Z",
      published_at: "2022-03-05T04:26:33Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.10",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.10",
      body:
        "FIX🐛:\r\n* Fix the problem that the front-end setting data permission does not take effect.\r\n* Fix password reset caused by modifying user information.#538\r\n* Fix readme 404 link.\r\n* Upgrade OXS interface.\r\n* Fix the newline problem in time package in code generation. #569\r\n\r\nFEAT✨:\r\n* Added obs,kodo.\r\n* Added oss test.\r\n* Update License copyright",
      reactions: {
        url:
          "https://api.github.com/repos/go-admin-team/go-admin/releases/61046316/reactions",
        total_count: 1,
        "+1": 0,
        "-1": 0,
        laugh: 1,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0
      }
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/59408692",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/59408692/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/59408692/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.9",
      id: 59408692,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "RE_kwDODrlrLc4DioE0",
      tag_name: "v2.0.9",
      target_commitish: "master",
      name: "v2.0.9",
      draft: false,
      prerelease: false,
      created_at: "2022-02-12T16:54:52Z",
      published_at: "2022-02-12T17:32:27Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.9",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.9",
      body:
        "本次更新内容：\r\n1. 修正macos环境中monitor功能的错误(#605)\r\n2. 重新定义了monitor的UI\r\n3. 修正了密码重置的消息提示\r\n4. 添加了sqlserver的支持【内测中】\r\n5. 修正了其他已知问题\r\n"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/57745436",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/57745436/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/57745436/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.8",
      id: 57745436,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "RE_kwDODrlrLc4DcSAc",
      tag_name: "v2.0.8",
      target_commitish: "master",
      name: "v2.0.8",
      draft: false,
      prerelease: false,
      created_at: "2022-01-22T12:03:21Z",
      published_at: "2022-01-22T12:05:08Z",
      assets: [
        {
          url:
            "https://api.github.com/repos/go-admin-team/go-admin/releases/assets/54664319",
          id: 54664319,
          node_id: "RA_kwDODrlrLc4DQhx_",
          name: "go-admin-db.db",
          label: null,
          uploader: {
            login: "wenjianzhang",
            id: 3890175,
            node_id: "MDQ6VXNlcjM4OTAxNzU=",
            avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/wenjianzhang",
            html_url: "https://github.com/wenjianzhang",
            followers_url:
              "https://api.github.com/users/wenjianzhang/followers",
            following_url:
              "https://api.github.com/users/wenjianzhang/following{/other_user}",
            gists_url:
              "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/wenjianzhang/subscriptions",
            organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
            repos_url: "https://api.github.com/users/wenjianzhang/repos",
            events_url:
              "https://api.github.com/users/wenjianzhang/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/wenjianzhang/received_events",
            type: "User",
            site_admin: false
          },
          content_type: "application/octet-stream",
          state: "uploaded",
          size: 335872,
          download_count: 4,
          created_at: "2022-01-22T14:05:24Z",
          updated_at: "2022-01-22T14:05:31Z",
          browser_download_url:
            "https://github.com/go-admin-team/go-admin/releases/download/v2.0.8/go-admin-db.db"
        }
      ],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.8",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.8",
      body:
        "本次更新内容：\r\n\r\n1. 修正了对sqlite的支持\r\n\r\n编译时需要添加 `-tags sqlite3` \r\n\r\n如果登录失败，请从这里下载sqlite数据库文件",
      reactions: {
        url:
          "https://api.github.com/repos/go-admin-team/go-admin/releases/57745436/reactions",
        total_count: 4,
        "+1": 2,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 1,
        rocket: 1,
        eyes: 0
      }
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/48889150",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/48889150/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/48889150/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.7",
      id: 48889150,
      author: {
        login: "lwnmengjing",
        id: 12806223,
        node_id: "MDQ6VXNlcjEyODA2MjIz",
        avatar_url: "https://avatars.githubusercontent.com/u/12806223?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lwnmengjing",
        html_url: "https://github.com/lwnmengjing",
        followers_url: "https://api.github.com/users/lwnmengjing/followers",
        following_url:
          "https://api.github.com/users/lwnmengjing/following{/other_user}",
        gists_url: "https://api.github.com/users/lwnmengjing/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lwnmengjing/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/lwnmengjing/subscriptions",
        organizations_url: "https://api.github.com/users/lwnmengjing/orgs",
        repos_url: "https://api.github.com/users/lwnmengjing/repos",
        events_url: "https://api.github.com/users/lwnmengjing/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lwnmengjing/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQ4ODg5MTUw",
      tag_name: "v2.0.7",
      target_commitish: "master",
      name: "v2.0.7",
      draft: false,
      prerelease: false,
      created_at: "2021-09-02T12:47:51Z",
      published_at: "2021-09-02T12:50:54Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.7",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.7",
      body: "本次更新内容:\r\n- [x] 修复gcc强依赖问题",
      reactions: {
        url:
          "https://api.github.com/repos/go-admin-team/go-admin/releases/48889150/reactions",
        total_count: 2,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 2,
        rocket: 0,
        eyes: 0
      }
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/48107798",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/48107798/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/48107798/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.6",
      id: 48107798,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQ4MTA3Nzk4",
      tag_name: "v2.0.6",
      target_commitish: "master",
      name: "v2.0.6",
      draft: false,
      prerelease: false,
      created_at: "2021-08-19T11:36:42Z",
      published_at: "2021-08-19T11:39:30Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.6",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.6",
      body:
        "本次更新内容：\r\n\r\n1. 升级gin 1.7.3\r\n1. 升级包go-admin-core v1.3.7和go-admin-core/sdk v1.3.7至v1.3.8\r\n1. 删除移除功能的数据初始化\r\n1. 优化角色修改时循环AddNamedPolicy\r\n1. 调整了参数设置功能中的系统logo相关问题"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/47588121",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/47588121/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/47588121/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.5",
      id: 47588121,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQ3NTg4MTIx",
      tag_name: "v2.0.5",
      target_commitish: "master",
      name: "v2.0.5",
      draft: false,
      prerelease: false,
      created_at: "2021-08-10T08:39:54Z",
      published_at: "2021-08-10T08:41:09Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.5",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.5",
      body: "本次更新内容：\r\n\r\n1. 修复菜单树的问题"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/47561884",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/47561884/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/47561884/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.4",
      id: 47561884,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQ3NTYxODg0",
      tag_name: "v2.0.4",
      target_commitish: "master",
      name: "v2.0.4",
      draft: false,
      prerelease: false,
      created_at: "2021-08-09T19:55:34Z",
      published_at: "2021-08-09T20:01:06Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.4",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.4",
      body:
        "本次更新内容：\r\n\r\n1. 修复菜单编辑未赋权接口列表\r\n1. 优化生成功能的修改和删除询问提示\r\n1. 统一生成后的路由\r\n1. 优化生成的vue页面中的修改和删除按钮提示方式\r\n1. 修复已知bug"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/47400527",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/47400527/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/47400527/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.3",
      id: 47400527,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQ3NDAwNTI3",
      tag_name: "v2.0.3",
      target_commitish: "master",
      name: "v2.0.3",
      draft: false,
      prerelease: false,
      created_at: "2021-08-06T02:49:41Z",
      published_at: "2021-08-06T02:52:12Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.3",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.3",
      body:
        "本次更新内容：\r\n\r\n1. api自动根据接口注释补充接口名称信息\r\n1. 修改自动生成是字典相关的问题\r\n1. 修复已知问题"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/46873959",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/46873959/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/46873959/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.2",
      id: 46873959,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQ2ODczOTU5",
      tag_name: "v2.0.2",
      target_commitish: "master",
      name: "v2.0.2",
      draft: false,
      prerelease: false,
      created_at: "2021-07-28T02:00:12Z",
      published_at: "2021-07-28T02:03:36Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.2",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.2",
      body:
        "本次更新内容：\r\n\r\n1. 更新接口文档注释 (#507)\r\n1. 修复创建用户时的问题 ( #506)\r\n1. 修复删除部门的问题 (#510)"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/46618790",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/46618790/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/46618790/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.1",
      id: 46618790,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQ2NjE4Nzkw",
      tag_name: "v2.0.1",
      target_commitish: "master",
      name: "v2.0.1",
      draft: false,
      prerelease: false,
      created_at: "2021-07-22T16:43:34Z",
      published_at: "2021-07-22T16:44:48Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.1",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.1",
      body:
        "本次更新内容：\r\n\r\n修复createapp时产生的问题\r\n修复角色菜单问题\r\n修复已知bug"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/46171514",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/46171514/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/46171514/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.0",
      id: 46171514,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQ2MTcxNTE0",
      tag_name: "v2.0.0",
      target_commitish: "master",
      name: "v2.0.0",
      draft: false,
      prerelease: false,
      created_at: "2021-07-14T08:24:46Z",
      published_at: "2021-07-14T08:28:20Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.0",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.0",
      body: "本次更新内容：\r\n\r\n1. 添加创建app命令\r\n1. 修复已知问题"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/45677869",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/45677869/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/45677869/assets{?name,label}",
      html_url:
        "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.0-beta.10",
      id: 45677869,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQ1Njc3ODY5",
      tag_name: "v2.0.0-beta.10",
      target_commitish: "master",
      name: "v2.0.0-beta.10",
      draft: false,
      prerelease: false,
      created_at: "2021-07-04T15:33:55Z",
      published_at: "2021-07-04T15:40:51Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.0-beta.10",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.0-beta.10",
      body:
        "本次更新内容：\r\n\r\n1. 增加磁盘列表主机名称与当前时间 …\r\n1. vue-cli@3 升级为 vue-cli@4\r\n1. 优化了前端首次加载慢的问题\r\n1. Change Node Sass to Dart Sass\r\n1. 代码生成工具 …\r\n1. 调整登陆日志和api和操作日志模块\r\n1. 添加默认demo代码生成表\r\n1. 升级依赖关系\r\n1. 操作log添加字符限制"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/45568923",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/45568923/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/45568923/assets{?name,label}",
      html_url:
        "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.0-beta.9",
      id: 45568923,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQ1NTY4OTIz",
      tag_name: "v2.0.0-beta.9",
      target_commitish: "master",
      name: "v2.0.0-beta.9",
      draft: false,
      prerelease: false,
      created_at: "2021-07-01T15:13:03Z",
      published_at: "2021-07-01T15:14:24Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.0-beta.9",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.0-beta.9",
      body: "本次更新内容：\r\n\r\n1. 修改字段验证信息提示\r\n2. 修复已知问题"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/45497961",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/45497961/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/45497961/assets{?name,label}",
      html_url:
        "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.0-beta.8",
      id: 45497961,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQ1NDk3OTYx",
      tag_name: "v2.0.0-beta.8",
      target_commitish: "master",
      name: "v2.0.0-beta.8",
      draft: false,
      prerelease: false,
      created_at: "2021-06-30T14:48:45Z",
      published_at: "2021-06-30T14:50:39Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.0-beta.8",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.0-beta.8",
      body:
        "本次更新内容：\r\n\r\n1. 用户修改头像接口入参模型分离(#468)\r\n1. 配置文件默认使用memory cache\r\n1. 代码生成模版升级\r\n1. 生成逻辑调整\r\n1. 已知bug修复"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/45443259",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/45443259/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/45443259/assets{?name,label}",
      html_url:
        "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.0-beta.7",
      id: 45443259,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQ1NDQzMjU5",
      tag_name: "v2.0.0-beta.7",
      target_commitish: "master",
      name: "v2.0.0-beta.7",
      draft: false,
      prerelease: false,
      created_at: "2021-06-29T18:04:10Z",
      published_at: "2021-06-29T18:16:37Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.0-beta.7",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.0-beta.7",
      body:
        "本次更新内容：\r\n\r\n1. 更新接口文档注释\r\n1. 更新生成模版\r\n1. dto部分文件调整\r\n1. 修复 #465 #457 \r\n1. 修复已知问题\r\n\r\n⚠️：server命令调整，新增-a参数，默认为false，新增接口后可以设置为true状态，系统会自动添加接口数据\r\n\r\nTODO: dto模块改进中..."
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/44905672",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/44905672/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/44905672/assets{?name,label}",
      html_url:
        "https://github.com/go-admin-team/go-admin/releases/tag/2.0.0-beta.6",
      id: 44905672,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQ0OTA1Njcy",
      tag_name: "2.0.0-beta.6",
      target_commitish: "master",
      name: "2.0.0-beta.6",
      draft: false,
      prerelease: false,
      created_at: "2021-06-19T16:59:39Z",
      published_at: "2021-06-19T17:00:20Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/2.0.0-beta.6",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/2.0.0-beta.6",
      body:
        "本次更新内容：\r\n\r\n1. 菜单、角色、用户模块调整\r\n1. 删除历史版本菜单、角色、角色部门关系、角色菜单关系业务\r\n1. 系统监控接口\r\n1. 移除内容管理、资源管理、行政区管理\r\n1. 调整部分功能的状态字段为int类型\r\n1. 调整部分功能删除接口url传参改为data传参\r\n1. 更新接口文档\r\n1. 修复部分bug\r\n\r\nserver命令调整，新增-a参数，默认为false，新增接口后可以设置为true状态，系统会自动添加接口数据"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/44801356",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/44801356/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/44801356/assets{?name,label}",
      html_url:
        "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.0-beta.5",
      id: 44801356,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQ0ODAxMzU2",
      tag_name: "v2.0.0-beta.5",
      target_commitish: "master",
      name: "v2.0.0-beta.5",
      draft: false,
      prerelease: false,
      created_at: "2021-06-15T09:54:46Z",
      published_at: "2021-06-17T14:29:00Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.0-beta.5",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.0-beta.5",
      body:
        "本次更新内容：\r\n\r\n1. 修正字典跳转问题\r\n1. 更新数据初始化sql\r\n1. 调整行政区命名\r\n1. 简化菜单、角色、角色部门关系、角色菜单关系业务\r\n1. 调整管理员和字典相关结构体字段顺序\r\n1. 文件上传修改为本地路径\r\n1. 数据迁移结构体重命名\r\n\r\n下个版本将移除部分功能：\r\n1. 资源管理\r\n1. 内容管理\r\n1. 以上两个功能相关sql"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/44606258",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/44606258/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/44606258/assets{?name,label}",
      html_url:
        "https://github.com/go-admin-team/go-admin/releases/tag/v2.0.0-beta.3",
      id: 44606258,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQ0NjA2MjU4",
      tag_name: "v2.0.0-beta.3",
      target_commitish: "master",
      name: "v2.0.0-beta.3",
      draft: false,
      prerelease: false,
      created_at: "2021-06-13T15:20:30Z",
      published_at: "2021-06-15T00:21:30Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v2.0.0-beta.3",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v2.0.0-beta.3",
      body:
        "本次更新内容：\r\n\r\n1. 链式调用改造\r\n1. 增加bind通用方法\r\n1. 分离app\r\n1. 优化字典数据错误判断写法\r\n1. 优化配置信息\r\n1. 修改工具写法\r\n1. 优化router import\r\n1. 修改参数删除，由url参数改为body\r\n1. 删除模版生成提示代码\r\n1. 添加api管理功能\r\n1. 统一api生成路径\r\n1. 添加生成模块前端文件名\r\n1. 重置post、loginlog、dept、config、operalog路由\r\n1. 修改删除接口传参方式\r\n1. 分离字典、gen相关路由\r\n1.  gen模块文件名和路径规则调整\r\n1.  优化Context设置方法\r\n1. 检查并写入api\r\n1. 新增省市区基础数据\r\n1. apis路径简化\r\n1. 升级gin版本\r\n1. 添加默认字段排序\r\n1. 修复vue模板的条件判断\r\n1. 移除设置log函数\r\n1. 优化logger使用\r\n1. 结构统一调整\r\n1. 部分功能重写\r\n1. 核心业务结构调整\r\n1. 修复部门数据权限\r\n1. 数据字典根据key获取 业务页面使用\r\n1. 系统监控地址格式化\r\n1. 角色模块、 用户模块、用户模块添加列排序\r\n1. 日志中间件调整\r\n1. 移除重复注册中间件\r\n1. 添加队列和缓存的默认配置信息\r\n1. api业务dto bind()、Generate()优化\r\n1. 参数设置添加接口文档\r\n1. 操作日志功能更换bind方式\r\n1. 排序字段接受参数名调整\r\n1. 上传文件去掉默认标识验证\r\n1. 操作日志多余参数去掉\r\n1. 开放部分中间件\r\n1. 添加修改配置接口\r\n1. 参数更新功能\r\n1. 修复queue redis模式阿里云不工作问题\r\n1. runtime接管 中间件\r\n1. 修正接口文档配置信息\r\n1. 修正菜单搜索条件信息\r\n1. 调整菜单代码结构\r\n1. 定时任务，触发函数，无法正常关闭\r\n1. 优化job处理方式\r\n1. 调整应用中间件\r\n1. 支持大文件分割配置\r\n1. engine 初始化调整\r\n1. 开放接口无需认证\r\n1. 修改通过id获取详情返回消息\r\n1. 修改数据字典路由注册\r\n1. 调整客户端ip获取方法以及日志中对应位置更新\r\n1. 添加排除路由列表\r\n1.  api rabc检测时将排除列表中的path剔除不在参与验证\r\n1. 调整SysChinaAreaData Api的函数名称以及路由引用\r\n1. 修复菜单更新是不能更新绑定api的问题\r\n1. 优化资源管理的路由函数名称\r\n\r\n## todo：\r\n代码生成工具2.0\r\n"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/43878365",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/43878365/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/43878365/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.3.9",
      id: 43878365,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQzODc4MzY1",
      tag_name: "v1.3.9",
      target_commitish: "master",
      name: "v1.3.9",
      draft: false,
      prerelease: false,
      created_at: "2021-05-31T23:42:05Z",
      published_at: "2021-06-01T00:31:57Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.3.9",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.3.9",
      body:
        "本次更新内容：\r\n\r\n修复定时任务无法正常关闭\r\n修复queue redis模式阿里云不工作问题\r\n修复必填字段判断错误\r\n修复已知bug"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/43819291",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/43819291/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/43819291/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.3.8",
      id: 43819291,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQzODE5Mjkx",
      tag_name: "v1.3.8",
      target_commitish: "master",
      name: "v1.3.8",
      draft: false,
      prerelease: false,
      created_at: "2021-05-30T13:11:42Z",
      published_at: "2021-05-30T13:13:15Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.3.8",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.3.8",
      body: "本次更新内容：\r\n\r\n修复关联表下拉搜索未生效问题\r\n修复已知bug"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/43753793",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/43753793/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/43753793/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.3.7",
      id: 43753793,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQzNzUzNzkz",
      tag_name: "v1.3.7",
      target_commitish: "master",
      name: "v1.3.7",
      draft: false,
      prerelease: false,
      created_at: "2021-05-28T09:28:12Z",
      published_at: "2021-05-28T09:29:56Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.3.7",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.3.7",
      body: "本次更新内容：\r\n\r\n修复内容管理中查询报错问题\r\n修复已知bug"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/43411889",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/43411889/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/43411889/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.3.6",
      id: 43411889,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQzNDExODg5",
      tag_name: "v1.3.6",
      target_commitish: "master",
      name: "v1.3.6",
      draft: false,
      prerelease: false,
      created_at: "2021-05-22T15:34:44Z",
      published_at: "2021-05-22T15:37:01Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.3.6",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.3.6",
      body:
        "本次更新内容：\r\n\r\n修复数据权限中本部门以及以下权限问题\r\n修复已知bug"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/42886776",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/42886776/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/42886776/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.3.5",
      id: 42886776,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQyODg2Nzc2",
      tag_name: "v1.3.5",
      target_commitish: "master",
      name: "v1.3.5",
      draft: false,
      prerelease: false,
      created_at: "2021-05-13T06:58:16Z",
      published_at: "2021-05-13T06:59:11Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.3.5",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.3.5",
      body: "本次更新内容：\r\n\r\n修复已知bug"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/42689834",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/42689834/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/42689834/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.3.4",
      id: 42689834,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQyNjg5ODM0",
      tag_name: "v1.3.4",
      target_commitish: "master",
      name: "v1.3.4",
      draft: false,
      prerelease: false,
      created_at: "2021-05-10T08:45:12Z",
      published_at: "2021-05-10T08:48:40Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.3.4",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.3.4",
      body:
        "本次更新内容：\r\n1. 初始化gen创建者信息\r\n2. api基类优化\r\n3. 添加windows环境的使用说明\r\n4. 修复生成工具导入问题\r\n5. 修复其他已知问题"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/42600190",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/42600190/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/42600190/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.3.3",
      id: 42600190,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQyNjAwMTkw",
      tag_name: "v1.3.3",
      target_commitish: "master",
      name: "v1.3.3",
      draft: false,
      prerelease: false,
      created_at: "2021-05-07T12:09:13Z",
      published_at: "2021-05-07T12:18:20Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.3.3",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.3.3",
      body:
        "本次更新内容：\r\n\r\n1. 优化dto模块\r\n2. 优化service模块\r\n3. 模版升级\r\n4. 更新api写法\r\n5. 优化接口文档模版\r\n6. 修复用户管理左侧部门条件过滤\r\n7. 修复已知bug"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/40703413",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/40703413/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/40703413/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.3.2",
      id: 40703413,
      author: {
        login: "lwnmengjing",
        id: 12806223,
        node_id: "MDQ6VXNlcjEyODA2MjIz",
        avatar_url: "https://avatars.githubusercontent.com/u/12806223?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lwnmengjing",
        html_url: "https://github.com/lwnmengjing",
        followers_url: "https://api.github.com/users/lwnmengjing/followers",
        following_url:
          "https://api.github.com/users/lwnmengjing/following{/other_user}",
        gists_url: "https://api.github.com/users/lwnmengjing/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lwnmengjing/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/lwnmengjing/subscriptions",
        organizations_url: "https://api.github.com/users/lwnmengjing/orgs",
        repos_url: "https://api.github.com/users/lwnmengjing/repos",
        events_url: "https://api.github.com/users/lwnmengjing/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lwnmengjing/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQwNzAzNDEz",
      tag_name: "v1.3.2",
      target_commitish: "master",
      name: "v1.3.2",
      draft: false,
      prerelease: false,
      created_at: "2021-03-30T14:56:52Z",
      published_at: "2021-03-30T15:04:51Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.3.2",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.3.2",
      body:
        "本次更新内容：\r\n1. admin中的公共中间件，提到common\r\n2. 修正文档\r\n3. 使用runtime cache中的mq功能优化日志存储 \r\n4. 修复部分已知bug"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/40308725",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/40308725/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/40308725/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.3.1",
      id: 40308725,
      author: {
        login: "lwnmengjing",
        id: 12806223,
        node_id: "MDQ6VXNlcjEyODA2MjIz",
        avatar_url: "https://avatars.githubusercontent.com/u/12806223?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lwnmengjing",
        html_url: "https://github.com/lwnmengjing",
        followers_url: "https://api.github.com/users/lwnmengjing/followers",
        following_url:
          "https://api.github.com/users/lwnmengjing/following{/other_user}",
        gists_url: "https://api.github.com/users/lwnmengjing/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lwnmengjing/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/lwnmengjing/subscriptions",
        organizations_url: "https://api.github.com/users/lwnmengjing/orgs",
        repos_url: "https://api.github.com/users/lwnmengjing/repos",
        events_url: "https://api.github.com/users/lwnmengjing/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lwnmengjing/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTQwMzA4NzI1",
      tag_name: "v1.3.1",
      target_commitish: "master",
      name: "v1.3.1",
      draft: false,
      prerelease: false,
      created_at: "2021-03-24T14:49:33Z",
      published_at: "2021-03-24T15:06:43Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.3.1",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.3.1",
      body:
        "本次更新内容：\r\n1. 优化生成的swagger\r\n2. 优化logger设置获取流程\r\n3. 菜单配置迁移脚本功能"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/39926637",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/39926637/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/39926637/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.3.0",
      id: 39926637,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTM5OTI2NjM3",
      tag_name: "v1.3.0",
      target_commitish: "master",
      name: "v1.3.0",
      draft: false,
      prerelease: false,
      created_at: "2021-03-17T08:42:47Z",
      published_at: "2021-03-17T08:47:25Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.3.0",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.3.0",
      body:
        "本次更新主要针对框架的整理；\r\n1、log功能的调整\r\n2、多数据库的支持\r\n3、基础代码库的分离\r\n4、api层写法统一\r\n5、优化api返回方法\r\n6、系统配置统一使用参数设置功能\r\n7、修复已知bug"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/39689996",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/39689996/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/39689996/assets{?name,label}",
      html_url:
        "https://github.com/go-admin-team/go-admin/releases/tag/v1.3.0rc.1",
      id: 39689996,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTM5Njg5OTk2",
      tag_name: "v1.3.0rc.1",
      target_commitish: "master",
      name: "v1.3.0rc.1",
      draft: false,
      prerelease: false,
      created_at: "2021-03-11T15:58:14Z",
      published_at: "2021-03-12T00:45:53Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.3.0rc.1",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.3.0rc.1",
      body: "本次更新内容：\r\n1、已知bug的修复"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/39639667",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/39639667/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/39639667/assets{?name,label}",
      html_url:
        "https://github.com/go-admin-team/go-admin/releases/tag/v1.3.0rc.0",
      id: 39639667,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTM5NjM5NjY3",
      tag_name: "v1.3.0rc.0",
      target_commitish: "master",
      name: "v1.3.0rc.0",
      draft: false,
      prerelease: false,
      created_at: "2021-03-11T08:43:29Z",
      published_at: "2021-03-11T08:46:53Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.3.0rc.0",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.3.0rc.0",
      body:
        "本次更新主要针对框架的整理；\r\n1、log功能的调整\r\n2、多数据库的支持\r\n3、基础代码库的分离\r\n4、修复已知bug"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/33382760",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/33382760/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/33382760/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.2.2",
      id: 33382760,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTMzMzgyNzYw",
      tag_name: "v1.2.2",
      target_commitish: "master",
      name: "v1.2.2",
      draft: false,
      prerelease: false,
      created_at: "2020-11-03T02:58:29Z",
      published_at: "2020-11-03T03:01:01Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.2.2",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.2.2",
      body:
        "1. admin 角色权限调整默认全部权限\r\n1. 优化内容分类管理\r\n1. 系统登录日志和操作日志代码优化\r\n1. 性能指标、健康检查、default log配置生效\r\n1. 日志全部改为go-admin-core库日志，去除对其他项目的依赖\r\n1. 去除pkg/auth对tools依赖，减少循环引用可能性\r\n1. 增加链路追踪，熟悉的朋友可以将go-admin作为微服务的网关使用😄\r\n1. 代码优化\r\n1. 部分已知bug修复"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/32702994",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/32702994/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/32702994/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.2.1",
      id: 32702994,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTMyNzAyOTk0",
      tag_name: "v1.2.1",
      target_commitish: "master",
      name: "v1.2.1",
      draft: false,
      prerelease: false,
      created_at: "2020-10-17T09:58:30Z",
      published_at: "2020-10-17T10:02:48Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.2.1",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.2.1",
      body:
        "1. 登陆页面适配移动端\r\n2. 调整sysconfig功能\r\n3. 修复已知BUG\r\n\r\n此版本针对sys_config的表结构进行了调整，原来的 `config_id` 调整成 `id`,需要执行数据库初始化，如果是生产环境不建议直接进行初始化操作！"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/32159890",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/32159890/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/32159890/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.2.0",
      id: 32159890,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTMyMTU5ODkw",
      tag_name: "v1.2.0",
      target_commitish: "master",
      name: "v1.2.0",
      draft: false,
      prerelease: false,
      created_at: "2020-10-05T10:29:32Z",
      published_at: "2020-10-05T10:30:08Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.2.0",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.2.0",
      body:
        "添加资源管理\r\n添加资源统一组件\r\n代码生成工具支持关系表\r\n调整了项目结构\r\n添加了路由主动注册机制\r\n添加了数据库迁移功能\r\n添加无代码CRUD函数\r\n添加通用CRUD函数\r\n修复了部分已知bug"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/31142349",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/31142349/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/31142349/assets{?name,label}",
      html_url:
        "https://github.com/go-admin-team/go-admin/releases/tag/v1.2.0-beta",
      id: 31142349,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTMxMTQyMzQ5",
      tag_name: "v1.2.0-beta",
      target_commitish: "dev",
      name: "v1.2.0-beta",
      draft: false,
      prerelease: true,
      created_at: "2020-09-11T17:27:39Z",
      published_at: "2020-09-11T17:34:30Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.2.0-beta",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.2.0-beta",
      body:
        "添加资源管理\r\n添加资源统一组件\r\n代码生成工具支持关系表\r\n调整了项目结构\r\n添加了路由主动注册机制\r\n添加了数据库迁移功能\r\n添加通用CRUD函数\r\n修复了部分已知bug"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/29804905",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/29804905/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/29804905/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.1.5",
      id: 29804905,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTI5ODA0OTA1",
      tag_name: "v1.1.5",
      target_commitish: "master",
      name: "v1.1.5",
      draft: false,
      prerelease: false,
      created_at: "2020-08-18T08:49:54Z",
      published_at: "2020-08-18T08:52:18Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.1.5",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.1.5",
      body:
        "修复job手动启动bug\r\n修复代码预览超出显示\r\n修复表单构建js不能加载\r\n"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/29661200",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/29661200/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/29661200/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.1.4",
      id: 29661200,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTI5NjYxMjAw",
      tag_name: "v1.1.4",
      target_commitish: "master",
      name: "v1.1.4",
      draft: false,
      prerelease: false,
      created_at: "2020-08-13T16:01:45Z",
      published_at: "2020-08-13T16:02:08Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.1.4",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.1.4",
      body:
        "1、升级代码生成模板\r\n2、优化job加载方式\r\n3、修复新增表结构初始化问题\r\n4、其他问题的修复"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/29606795",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/29606795/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/29606795/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.1.3",
      id: 29606795,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTI5NjA2Nzk1",
      tag_name: "v1.1.3",
      target_commitish: "master",
      name: "v1.1.3",
      draft: false,
      prerelease: false,
      created_at: "2020-08-12T13:31:57Z",
      published_at: "2020-08-12T13:32:48Z",
      assets: [
        {
          url:
            "https://api.github.com/repos/go-admin-team/go-admin/releases/assets/23868370",
          id: 23868370,
          node_id: "MDEyOlJlbGVhc2VBc3NldDIzODY4Mzcw",
          name: "sql.sql",
          label: null,
          uploader: {
            login: "wenjianzhang",
            id: 3890175,
            node_id: "MDQ6VXNlcjM4OTAxNzU=",
            avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/wenjianzhang",
            html_url: "https://github.com/wenjianzhang",
            followers_url:
              "https://api.github.com/users/wenjianzhang/followers",
            following_url:
              "https://api.github.com/users/wenjianzhang/following{/other_user}",
            gists_url:
              "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/wenjianzhang/subscriptions",
            organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
            repos_url: "https://api.github.com/users/wenjianzhang/repos",
            events_url:
              "https://api.github.com/users/wenjianzhang/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/wenjianzhang/received_events",
            type: "User",
            site_admin: false
          },
          content_type: "application/octet-stream",
          state: "uploaded",
          size: 8038,
          download_count: 21,
          created_at: "2020-08-13T03:47:26Z",
          updated_at: "2020-08-13T03:47:28Z",
          browser_download_url:
            "https://github.com/go-admin-team/go-admin/releases/download/v1.1.3/sql.sql"
        }
      ],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.1.3",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.1.3",
      body:
        "1、添加自动任务\r\na、支持api调用\r\nb、支持函数调用\r\n2、UI整体风格升级\r\n3、添加主题切换\r\n4、升级任务栏\r\n5、升级服务监控\r\n6、添加缓存模块\r\n7、添加dockerfile\r\n8、修复已知bug\r\n\r\n提示：已经初始化过数据库的童鞋需要注意一下，系统菜单有新增，sql语句已经更新了；已经初始化使用的同学请注意 sql.sql文件，执行的时间请注意id"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/29215862",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/29215862/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/29215862/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.1.2",
      id: 29215862,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTI5MjE1ODYy",
      tag_name: "v1.1.2",
      target_commitish: "master",
      name: "v1.1.2",
      draft: false,
      prerelease: false,
      created_at: "2020-08-03T06:25:59Z",
      published_at: "2020-08-03T06:26:49Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.1.2",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.1.2",
      body:
        "fix: Use NewSyncedEnforcer instead NewEnforcer to solve the thread safe"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/29189026",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/29189026/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/29189026/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.1.1",
      id: 29189026,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTI5MTg5MDI2",
      tag_name: "v1.1.1",
      target_commitish: "master",
      name: "v1.1.1",
      draft: false,
      prerelease: false,
      created_at: "2020-08-01T06:52:29Z",
      published_at: "2020-08-01T06:53:20Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.1.1",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.1.1",
      body:
        "1. 代码生成添加操作按钮确认提示；\r\n2. 代码生成添加时间类型支持；\r\n3. 代码生成添加时间控件、下拉控件、文本域的支持；\r\n4. 修复代码生成无需权限的问题；\r\n5. 修改了部分格式问题；\r\n6. 默认开启log；\r\n7. 修复了已知bug；"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/28994018",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/28994018/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/28994018/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.1.0",
      id: 28994018,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTI4OTk0MDE4",
      tag_name: "v1.1.0",
      target_commitish: "master",
      name: "v1.1.0",
      draft: false,
      prerelease: false,
      created_at: "2020-07-27T15:46:55Z",
      published_at: "2020-07-27T15:57:34Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.1.0",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.1.0",
      body:
        "代码生成工具的升级：\r\n后端\r\n\r\n1. api、model、router生成到项目路径\r\n1. router直接注册\r\n\r\n前端\r\n1. js、view 生成到项目路径\r\n\r\n新功能添加完成后，再也不用担心配置起来很麻烦了！\r\n1. 增加一键添加菜单配置和接口配置\r\n\r\n添加开发模式，开发模式下\r\n1. swagger 可以使用登录接口不需要验证码\r\n2. token 过期时间无限，不必担心生产环境，开发环境以外是根据配置文件中的时长设置\r\n\r\n增加数据库类型\r\n1. 增加了pgsql、sqlite的支持\r\n\r\n修复\r\n已知bug的修复\r\n\r\n\r\n"
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/28162805",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/28162805/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/28162805/assets{?name,label}",
      html_url: "https://github.com/go-admin-team/go-admin/releases/tag/v1.0",
      id: 28162805,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTI4MTYyODA1",
      tag_name: "v1.0",
      target_commitish: "master",
      name: "v1.0.6",
      draft: false,
      prerelease: false,
      created_at: "2020-07-01T14:32:41Z",
      published_at: "2020-07-02T14:48:58Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.0",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.0",
      body: ""
    },
    {
      url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/24532490",
      assets_url:
        "https://api.github.com/repos/go-admin-team/go-admin/releases/24532490/assets",
      upload_url:
        "https://uploads.github.com/repos/go-admin-team/go-admin/releases/24532490/assets{?name,label}",
      html_url:
        "https://github.com/go-admin-team/go-admin/releases/tag/v1.0.0.0",
      id: 24532490,
      author: {
        login: "wenjianzhang",
        id: 3890175,
        node_id: "MDQ6VXNlcjM4OTAxNzU=",
        avatar_url: "https://avatars.githubusercontent.com/u/3890175?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wenjianzhang",
        html_url: "https://github.com/wenjianzhang",
        followers_url: "https://api.github.com/users/wenjianzhang/followers",
        following_url:
          "https://api.github.com/users/wenjianzhang/following{/other_user}",
        gists_url: "https://api.github.com/users/wenjianzhang/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wenjianzhang/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/wenjianzhang/subscriptions",
        organizations_url: "https://api.github.com/users/wenjianzhang/orgs",
        repos_url: "https://api.github.com/users/wenjianzhang/repos",
        events_url:
          "https://api.github.com/users/wenjianzhang/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wenjianzhang/received_events",
        type: "User",
        site_admin: false
      },
      node_id: "MDc6UmVsZWFzZTI0NTMyNDkw",
      tag_name: "v1.0.0.0",
      target_commitish: "master",
      name: "版本首发",
      draft: false,
      prerelease: true,
      created_at: "2020-03-14T14:23:21Z",
      published_at: "2020-03-15T01:03:55Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.0.0.0",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.0.0.0",
      body: "版本首发\r\n1. 接口权限\r\n2. 按钮权限\r\n3. 数据权限"
    }
  ];
  urls.map((r: any) => r.tag_name.replace("v", ""));
  urls.map((r: any) => !r.tag_name.includes("rc"));
  urls.filter((r: any) => !r.tag_name.includes("rc"));
  var vers: any = [];
  urls.map((r: any) => {
    if (!r.tag_name.includes("rc")) {
      vers.push(r.tag_name.replace("v", ""));
    }
    if (!r.tag_name.includes("beta")) {
      vers.push(r.tag_name.replace("v", ""));
    }
  });
  // return {"versions":vers}

  // We use github versions first, but if failed use npm versions as backup
  return (
    fetch(`${endpoint}/repos/go-admin-team/${repo}/releases?per_page=100`)
      .then(checkStatus)
      .then((response: Response) => response.json())
      .then(releases => releases.filter((r: any) => !r.prerelease))
      .then(({ releases }) =>
        releases.map((r: any) => !r.tag_name.includes("rc"))
      )
      .then(releases => {
        releases.map((r: any) => r.tag_name.replace("v", ""));
        var vers: any = [];
        releases.map((r: any) => vers.push(r.tag_name.replace("v", "")));
        return vers;
      })
      // .then(releases => orderVersions(versions))
      .then(releases => releases.slice(0, 100))
      .catch(err => {
        console.warn(err);
        return npmPromise;
      })
  );
}

export function fetchIssues(repo: string, keyword: string) {
  const q = encodeURIComponent(
    `is:issue repo:go-admin-team/${repo} ${keyword}`
  );
  return fetch(`${endpoint}/search/issues?q=${q}&per_page=5`)
    .then(checkStatus)
    .then((response: Response) => response.json())
    .then(json => json.items);
}
