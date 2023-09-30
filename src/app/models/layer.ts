import { Event } from "./event";

export interface Layer {
    title: string,
    titleBgColor: string,
    titleColor: string,
    containerBgColor: string,
    eventsLists: Array<Array<Event>>,
}
