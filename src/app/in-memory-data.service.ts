import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const people = [
      {
        id: 1,
        fullname_local_yomi: "なかむら　ゆうた1",
        fullname_local: "中村 祐太",
        fullname_global: "Yuta Nakamura",
        employee_id_global: "1020304050",
        employee_id_local: "10004844",
        account: "nakamura.yuta",
        email: "yuta.nakamura@nkmr.com",
        employer: "株式会社ディー・エヌ・エー (正社員) 在籍中",
        position: "株式会社ディー・エヌ・エー (契約社員) 経営企画本部IT戦略部開発チーム",
        entrance_date: "2018-03-24",
        retire_date: "2018-03-24",
        statusHistories: [
          {
            id: 1,
            corporation_id: 1,
            corporation: "株式会社ディー・エヌ・エー",
            isCorpEmployer: true,
            start_date: "2018-01-01",
            start_date_effective: "2017-12-25",
            end_date: null,
            end_date_effective: null,
          }
        ],
        positionHistories: [
          {
            id: 1,
            department_id: 1,
            department_fullname: "株式会社ディー・エヌ・エー 経営企画本部IT戦略部開発チーム",
            department_name: "開発チーム",
            title_id: 1,
            title: "チームリーダー",
            main: 1,
            start_date: "2018-01-01",
            start_date_effective: "2017-12-25",
            end_date: null,
            end_date_effective: null,
          }
        ]
      },
      {
        id: 2,
        fullname_local_yomi: "なかむら　ゆうた2",
        fullname_local: "中村 祐太",
        fullname_global: "Yuta Nakamura",
        employee_id_global: "1020304050",
        employee_id_local: "10004844",
        account: "nakamura.yuta",
        email: "yuta.nakamura@nkmr.com",
        employer: "株式会社ディー・エヌ・エー (正社員) 在籍中",
        position: "株式会社ディー・エヌ・エー (契約社員) 経営企画本部IT戦略部開発チーム",
        entrance_date: "2018-03-24",
        retire_date: "2018-03-24",
        statusHistories: [
          {
            id: 2,
            corporation_id: 1,
            corporation: "株式会社ディー・エヌ・エー",
            isCorpEmployer: true,
            start_date: "2018-01-01",
            start_date_effective: "2017-12-25",
            end_date: null,
            end_date_effective: null,
          }
        ],
        positionHistories: [
          {
            id: 2,
            department_id: 1,
            department_fullname: "株式会社ディー・エヌ・エー 経営企画本部IT戦略部開発チーム",
            department_name: "開発チーム",
            title_id: 1,
            title: "チームリーダー",
            main: 1,
            start_date: "2018-01-01",
            start_date_effective: "2017-12-25",
            end_date: null,
            end_date_effective: null,
          }
        ]
      },
      {
        id: 3,
        fullname_local_yomi: "なかむら　ゆうた3",
        fullname_local: "中村 祐太",
        fullname_global: "Yuta Nakamura",
        employee_id_global: "1020304050",
        employee_id_local: "10004844",
        account: "nakamura.yuta",
        email: "yuta.nakamura@nkmr.com",
        employer: "株式会社ディー・エヌ・エー (正社員) 在籍中",
        position: "株式会社ディー・エヌ・エー (契約社員) 経営企画本部IT戦略部開発チーム",
        entrance_date: "2018-03-24",
        retire_date: "2018-03-24",
        statusHistories: [
          {
            id: 3,
            corporation_id: 1,
            corporation: "株式会社ディー・エヌ・エー",
            isCorpEmployer: true,
            start_date: "2018-01-01",
            start_date_effective: "2017-12-25",
            end_date: null,
            end_date_effective: null,
          }
        ],
        positionHistories: [
          {
            id: 3,
            department_id: 1,
            department_fullname: "株式会社ディー・エヌ・エー 経営企画本部IT戦略部開発チーム",
            department_name: "開発チーム",
            title_id: 1,
            title: "チームリーダー",
            main: 1,
            start_date: "2018-01-01",
            start_date_effective: "2017-12-25",
            end_date: null,
            end_date_effective: null,
          }
        ]
      },
      {
        id: 4,
        fullname_local_yomi: "なかむら　ゆうた4",
        fullname_local: "中村 祐太",
        fullname_global: "Yuta Nakamura",
        employee_id_global: "1020304050",
        employee_id_local: "10004844",
        account: "nakamura.yuta",
        email: "yuta.nakamura@nkmr.com",
        employer: "株式会社ディー・エヌ・エー (正社員) 在籍中",
        position: "株式会社ディー・エヌ・エー (契約社員) 経営企画本部IT戦略部開発チーム",
        entrance_date: "2018-03-24",
        retire_date: "2018-03-24",
        statusHistories: [
          {
            id: 4,
            corporation_id: 1,
            corporation: "株式会社ディー・エヌ・エー",
            isCorpEmployer: true,
            start_date: "2018-01-01",
            start_date_effective: "2017-12-25",
            end_date: null,
            end_date_effective: null,
          }
        ],
        positionHistories: [
          {
            id: 4,
            department_id: 1,
            department_fullname: "株式会社ディー・エヌ・エー 経営企画本部IT戦略部開発チーム",
            department_name: "開発チーム",
            title_id: 1,
            title: "チームリーダー",
            main: 1,
            start_date: "2018-01-01",
            start_date_effective: "2017-12-25",
            end_date: null,
            end_date_effective: null,
          }
        ]
      },
    ];
    return {people};
  }
}