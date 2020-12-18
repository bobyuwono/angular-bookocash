import {Menu} from '../menu/menu';

export interface Order {
    id?:string;
    date:Date;
    items: Menu[];
}