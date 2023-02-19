// Type aliases can't be circular, but interfaces can.
// https://stackoverflow.com/questions/47842266/recursive-types-in-typescript
//type MyTuple<T> = [string, { [key: string]: string }, T[]];
//interface Node extends MyTuple<Node> { }

//export class SiteItem {..}
//export class SideMenu {.. }

interface MyTuple<T> {
    name: string;
    active: boolean;
    url?: string;
     //open !: string; // 用 operator => {{(m.active==='active'?'menu-open':'')}}
    items?: T[]
}

export interface Menu extends MyTuple<Menu> {}
