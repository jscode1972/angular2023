import { Menu } from "..";

export const MOCKS : Menu[] = [
    { name: '<Angular>', active : true,  items : [
      { name: '建置', active : true, url: 'contact' },
      { name: '元件', active : false, url: 'about' },
      { name: '路由', active : false },
      { name: '服務', active : false },
      { name: '指令', active : false },
      { name: '管道', active : false },
      { name: '表單', active : false }
    ]},
    { name: '<第二>', active : false, items : [
      { name: 'b1', active : false },
      { name: 'b2', active : false },
      { name: 'b3', active : false }
    ]},
    { name: '<第三>', active : false, items : [
      { name: 'c1', active : false },
      { name: 'c2', active : false },
      { name: 'd3', active : false }
    ]}
];