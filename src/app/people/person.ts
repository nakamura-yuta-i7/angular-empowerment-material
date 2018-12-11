export class PositionHistories {
  id: number;
  department_id: number;
  department_fullname: string;
  department_name: string;
  title_id: number;
  title: string;
  main: boolean;
  start_date: string;
  start_date_effective: string;
  end_date: string;
  end_date_effective: string;
}
export class Person {
  id: number;
  fullname_local_yomi: string;
  fullname_local: string;
  fullname_global: string;
  employee_id_global: string;
  employee_id_local: string;
  account: string;
  email: string;
  employer: string;
  position: string;
  entrance_date: string;
  retire_date: string;
  
  positionHistories: [PositionHistories];
  
}