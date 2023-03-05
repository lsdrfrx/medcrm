/**
  * @interface
  * @description employee dto interface

  * @property {string}        ID                   - идентификатор сотрудника
  * @property {string}        fullName             - ФИО сотрудника
  * @property {string}        conscription         - военнообязанность
  * @property {boolean}       laborUnionMembership - участник профсоюза
  * @property {Array<any>}    children             - дети
  * @property {Date}          dob                  - дата рождения
  * @property {string}        phoneNumber          - номер телефона
  * @property {string}        address              - домашний адрес
  * @property {Array<string>} documents            - документы
  * @property {number}        rate                 - ставка
  * @property {number|null}   course               - курс обучения, если студент
  * @property {string}        post                 - должность
  * @property {Array<any>}    covid                - информация о вакцинациях
  * @property {string}        substitution         - заместительство
  * @property {string}        kumsID               - идентификатор сотрудника в кумсе

*/

interface EmployeeDTO {
  ID: string;
  fullName: string;
  conscription: string;
  laborUnionMembership: boolean;
  children: Array<any>;
  dob: string;
  phoneNumber: string;
  address: string;
  documents: Array<any>;
  rate: number;
  course?: number;
  post: string;
  covid: Array<any>;
  substitution: string;
  medicalExamination: Array<any>;
  status: string;
  certificates: Array<any>;
  kumsID: string;
  fired: boolean;
}

interface CreateEmployeeDTO {
  fullName: string;
  conscription: string;
  laborUnionMembership: boolean;
  children: Array<any>;
  dob: string;
  phoneNumber: string;
  address: string;
  documents: Array<any>;
  rate: number;
  course?: number;
  post: string;
  covid: Array<any>;
  substitution: string;
  medicalExamination: Array<any>;
  status: string;
  certificates: Array<any>;
  kumsID: string;
}

export { EmployeeDTO, CreateEmployeeDTO };
