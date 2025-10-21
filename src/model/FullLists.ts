import ListItems from "./ListItems";

export interface List {
  list: ListItems[];
  load(): void;
  save(): void;
  clearList(): void;
  addItems(itemToAdd: ListItems): void;
  removeItems(itemToRemove:string): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();
  private constructor(private _list: ListItems[] = []) {}

  get list(): ListItems[] {
    return this._list;
  }
  set list(list: ListItems[]) {
    this._list = list;
  }

  //load
  load(): void {
    const storedList: string | null = localStorage.getItem("save");
    if (typeof storedList !== "string") {
      return;
    }
    const parsedList: { _id: string; _list: string; _checked: boolean }[] =
      JSON.parse(storedList);

      parsedList.forEach(eachItem => {
       const newListItem = new ListItems(eachItem._id, eachItem._list, eachItem._checked) 
       FullList.instance.addItems(newListItem)
      })
  }

  //save
  save(): void {
    localStorage.setItem("save", JSON.stringify("save"));
  }

  //clearList
  clearList(): void {
    this._list = [];
    this.save();
  }
  //addItems
  addItems(itemToAdd: ListItems): void {
    this._list.push(itemToAdd);
    this.save();
  }
  removeItems(id: string): void {
    this._list.filter((item) => item.id !== id);
    this.save();
  }
}
