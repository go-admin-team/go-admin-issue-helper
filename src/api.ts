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
        "FIX????: \r\n* ??????bcrypt????????????\r\n* ??????doc url of cgo\r\n* ?????????????????????????????????sys_casbin_rule???drop???????????????create?????????(#539)\r\n* ?????? UpdatePwd error\r\n* ??????????????????job??????????????????(#638)\r\n\r\nREFACTOR????: \r\n* ??????github.com/pkg/errors???????????????????????????\r\n\r\n\r\n",
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
        "FIX????:\r\n* Fix the problem that the closed job can start.#638\r\n* Add rolekey data duplicate verification.#649\r\n* Update readme. #629 "
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
        "FIX????:\r\n* Fix the problem that the front-end setting data permission does not take effect.\r\n* Fix password reset caused by modifying user information.#538\r\n* Fix readme 404 link.\r\n* Upgrade OXS interface.\r\n* Fix the newline problem in time package in code generation. #569\r\n\r\nFEAT???:\r\n* Added obs,kodo.\r\n* Added oss test.\r\n* Update License copyright",
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
        "?????????????????????\r\n1. ??????macos?????????monitor???????????????(#605)\r\n2. ???????????????monitor???UI\r\n3. ????????????????????????????????????\r\n4. ?????????sqlserver????????????????????????\r\n5. ???????????????????????????\r\n"
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
        "?????????????????????\r\n\r\n1. ????????????sqlite?????????\r\n\r\n????????????????????? `-tags sqlite3` \r\n\r\n???????????????????????????????????????sqlite???????????????",
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
      body: "??????????????????:\r\n- [x] ??????gcc???????????????",
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
        "?????????????????????\r\n\r\n1. ??????gin 1.7.3\r\n1. ?????????go-admin-core v1.3.7???go-admin-core/sdk v1.3.7???v1.3.8\r\n1. ????????????????????????????????????\r\n1. ???????????????????????????AddNamedPolicy\r\n1. ???????????????????????????????????????logo????????????"
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
      body: "?????????????????????\r\n\r\n1. ????????????????????????"
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
        "?????????????????????\r\n\r\n1. ???????????????????????????????????????\r\n1. ????????????????????????????????????????????????\r\n1. ????????????????????????\r\n1. ???????????????vue?????????????????????????????????????????????\r\n1. ????????????bug"
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
        "?????????????????????\r\n\r\n1. api????????????????????????????????????????????????\r\n1. ??????????????????????????????????????????\r\n1. ??????????????????"
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
        "?????????????????????\r\n\r\n1. ???????????????????????? (#507)\r\n1. ?????????????????????????????? ( #506)\r\n1. ??????????????????????????? (#510)"
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
        "?????????????????????\r\n\r\n??????createapp??????????????????\r\n????????????????????????\r\n????????????bug"
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
      body: "?????????????????????\r\n\r\n1. ????????????app??????\r\n1. ??????????????????"
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
        "?????????????????????\r\n\r\n1. ????????????????????????????????????????????? ???\r\n1. vue-cli@3 ????????? vue-cli@4\r\n1. ???????????????????????????????????????\r\n1. Change Node Sass to Dart Sass\r\n1. ?????????????????? ???\r\n1. ?????????????????????api?????????????????????\r\n1. ????????????demo???????????????\r\n1. ??????????????????\r\n1. ??????log??????????????????"
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
      body: "?????????????????????\r\n\r\n1. ??????????????????????????????\r\n2. ??????????????????"
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
        "?????????????????????\r\n\r\n1. ??????????????????????????????????????????(#468)\r\n1. ????????????????????????memory cache\r\n1. ????????????????????????\r\n1. ??????????????????\r\n1. ??????bug??????"
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
        "?????????????????????\r\n\r\n1. ????????????????????????\r\n1. ??????????????????\r\n1. dto??????????????????\r\n1. ?????? #465 #457 \r\n1. ??????????????????\r\n\r\n?????????server?????????????????????-a??????????????????false?????????????????????????????????true??????????????????????????????????????????\r\n\r\nTODO: dto???????????????..."
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
        "?????????????????????\r\n\r\n1. ????????????????????????????????????\r\n1. ?????????????????????????????????????????????????????????????????????????????????\r\n1. ??????????????????\r\n1. ???????????????????????????????????????????????????\r\n1. ????????????????????????????????????int??????\r\n1. ??????????????????????????????url????????????data??????\r\n1. ??????????????????\r\n1. ????????????bug\r\n\r\nserver?????????????????????-a??????????????????false?????????????????????????????????true??????????????????????????????????????????"
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
        "?????????????????????\r\n\r\n1. ????????????????????????\r\n1. ?????????????????????sql\r\n1. ?????????????????????\r\n1. ?????????????????????????????????????????????????????????????????????\r\n1. ???????????????????????????????????????????????????\r\n1. ?????????????????????????????????\r\n1. ??????????????????????????????\r\n\r\n????????????????????????????????????\r\n1. ????????????\r\n1. ????????????\r\n1. ????????????????????????sql"
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
        "?????????????????????\r\n\r\n1. ??????????????????\r\n1. ??????bind????????????\r\n1. ??????app\r\n1. ????????????????????????????????????\r\n1. ??????????????????\r\n1. ??????????????????\r\n1. ??????router import\r\n1. ????????????????????????url????????????body\r\n1. ??????????????????????????????\r\n1. ??????api????????????\r\n1. ??????api????????????\r\n1. ?????????????????????????????????\r\n1. ??????post???loginlog???dept???config???operalog??????\r\n1. ??????????????????????????????\r\n1. ???????????????gen????????????\r\n1.  gen????????????????????????????????????\r\n1.  ??????Context????????????\r\n1. ???????????????api\r\n1. ???????????????????????????\r\n1. apis????????????\r\n1. ??????gin??????\r\n1. ????????????????????????\r\n1. ??????vue?????????????????????\r\n1. ????????????log??????\r\n1. ??????logger??????\r\n1. ??????????????????\r\n1. ??????????????????\r\n1. ????????????????????????\r\n1. ????????????????????????\r\n1. ??????????????????key?????? ??????????????????\r\n1. ???????????????????????????\r\n1. ??????????????? ??????????????????????????????????????????\r\n1. ?????????????????????\r\n1. ???????????????????????????\r\n1. ??????????????????????????????????????????\r\n1. api??????dto bind()???Generate()??????\r\n1. ??????????????????????????????\r\n1. ????????????????????????bind??????\r\n1. ?????????????????????????????????\r\n1. ????????????????????????????????????\r\n1. ??????????????????????????????\r\n1. ?????????????????????\r\n1. ????????????????????????\r\n1. ??????????????????\r\n1. ??????queue redis??????????????????????????????\r\n1. runtime?????? ?????????\r\n1. ??????????????????????????????\r\n1. ??????????????????????????????\r\n1. ????????????????????????\r\n1. ????????????????????????????????????????????????\r\n1. ??????job????????????\r\n1. ?????????????????????\r\n1. ???????????????????????????\r\n1. engine ???????????????\r\n1. ????????????????????????\r\n1. ????????????id????????????????????????\r\n1. ??????????????????????????????\r\n1. ???????????????ip?????????????????????????????????????????????\r\n1. ????????????????????????\r\n1.  api rabc??????????????????????????????path????????????????????????\r\n1. ??????SysChinaAreaData Api?????????????????????????????????\r\n1. ???????????????????????????????????????api?????????\r\n1. ???????????????????????????????????????\r\n\r\n## todo???\r\n??????????????????2.0\r\n"
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
        "?????????????????????\r\n\r\n????????????????????????????????????\r\n??????queue redis??????????????????????????????\r\n??????????????????????????????\r\n????????????bug"
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
      body: "?????????????????????\r\n\r\n??????????????????????????????????????????\r\n????????????bug"
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
      body: "?????????????????????\r\n\r\n???????????????????????????????????????\r\n????????????bug"
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
        "?????????????????????\r\n\r\n??????????????????????????????????????????????????????\r\n????????????bug"
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
      body: "?????????????????????\r\n\r\n????????????bug"
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
        "?????????????????????\r\n1. ?????????gen???????????????\r\n2. api????????????\r\n3. ??????windows?????????????????????\r\n4. ??????????????????????????????\r\n5. ????????????????????????"
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
        "?????????????????????\r\n\r\n1. ??????dto??????\r\n2. ??????service??????\r\n3. ????????????\r\n4. ??????api??????\r\n5. ????????????????????????\r\n6. ??????????????????????????????????????????\r\n7. ????????????bug"
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
        "?????????????????????\r\n1. admin??????????????????????????????common\r\n2. ????????????\r\n3. ??????runtime cache??????mq???????????????????????? \r\n4. ??????????????????bug"
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
        "?????????????????????\r\n1. ???????????????swagger\r\n2. ??????logger??????????????????\r\n3. ??????????????????????????????"
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
        "??????????????????????????????????????????\r\n1???log???????????????\r\n2????????????????????????\r\n3???????????????????????????\r\n4???api???????????????\r\n5?????????api????????????\r\n6?????????????????????????????????????????????\r\n7???????????????bug"
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
      body: "?????????????????????\r\n1?????????bug?????????"
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
        "??????????????????????????????????????????\r\n1???log???????????????\r\n2????????????????????????\r\n3???????????????????????????\r\n4???????????????bug"
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
        "1. admin ????????????????????????????????????\r\n1. ????????????????????????\r\n1. ?????????????????????????????????????????????\r\n1. ??????????????????????????????default log????????????\r\n1. ??????????????????go-admin-core??????????????????????????????????????????\r\n1. ??????pkg/auth???tools????????????????????????????????????\r\n1. ?????????????????????????????????????????????go-admin??????????????????????????????????\r\n1. ????????????\r\n1. ????????????bug??????"
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
        "1. ???????????????????????????\r\n2. ??????sysconfig??????\r\n3. ????????????BUG\r\n\r\n???????????????sys_config??????????????????????????????????????? `config_id` ????????? `id`,?????????????????????????????????????????????????????????????????????????????????????????????"
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
        "??????????????????\r\n????????????????????????\r\n?????????????????????????????????\r\n?????????????????????\r\n?????????????????????????????????\r\n??????????????????????????????\r\n???????????????CRUD??????\r\n????????????CRUD??????\r\n?????????????????????bug"
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
        "??????????????????\r\n????????????????????????\r\n?????????????????????????????????\r\n?????????????????????\r\n?????????????????????????????????\r\n??????????????????????????????\r\n????????????CRUD??????\r\n?????????????????????bug"
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
        "??????job????????????bug\r\n??????????????????????????????\r\n??????????????????js????????????\r\n"
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
        "1???????????????????????????\r\n2?????????job????????????\r\n3???????????????????????????????????????\r\n4????????????????????????"
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
        "1?????????????????????\r\na?????????api??????\r\nb?????????????????????\r\n2???UI??????????????????\r\n3?????????????????????\r\n4??????????????????\r\n5?????????????????????\r\n6?????????????????????\r\n7?????????dockerfile\r\n8???????????????bug\r\n\r\n??????????????????????????????????????????????????????????????????????????????????????????sql??????????????????????????????????????????????????????????????? sql.sql?????????????????????????????????id"
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
        "1. ?????????????????????????????????????????????\r\n2. ???????????????????????????????????????\r\n3. ?????????????????????????????????????????????????????????????????????\r\n4. ??????????????????????????????????????????\r\n5. ??????????????????????????????\r\n6. ????????????log???\r\n7. ???????????????bug???"
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
        "??????????????????????????????\r\n??????\r\n\r\n1. api???model???router?????????????????????\r\n1. router????????????\r\n\r\n??????\r\n1. js???view ?????????????????????\r\n\r\n????????????????????????????????????????????????????????????????????????\r\n1. ?????????????????????????????????????????????\r\n\r\n????????????????????????????????????\r\n1. swagger ??????????????????????????????????????????\r\n2. token ?????????????????????????????????????????????????????????????????????????????????????????????????????????\r\n\r\n?????????????????????\r\n1. ?????????pgsql???sqlite?????????\r\n\r\n??????\r\n??????bug?????????\r\n\r\n\r\n"
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
      name: "????????????",
      draft: false,
      prerelease: true,
      created_at: "2020-03-14T14:23:21Z",
      published_at: "2020-03-15T01:03:55Z",
      assets: [],
      tarball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/tarball/v1.0.0.0",
      zipball_url:
        "https://api.github.com/repos/go-admin-team/go-admin/zipball/v1.0.0.0",
      body: "????????????\r\n1. ????????????\r\n2. ????????????\r\n3. ????????????"
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
