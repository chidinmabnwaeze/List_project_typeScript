import FullList from "../model/FullLists";

export interface DomList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class DomClassList implements DomList {
  ul: HTMLUListElement;
  static instance : DomClassList = new DomClassList()

  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  //clear
  clear(): void {
    this.ul.innerHTML = "";
  }

  //render
  render(fullList: FullList): void {
    this.clear();

    fullList.list.forEach((item) => {
      const li = document.createElement("li") as HTMLLIElement;
      li.className = "item";

      const input = document.createElement("input") as HTMLInputElement;
      input.className = "input";
      input.type = "checkbox";
      input.id = item.id;
      input.tabIndex = 0;
      input.checked = item.checked;
      li.append(input);

      input.addEventListener('change' ,()=>{
         item.checked = !item.checked
         fullList.save()
      })

      const label = document.createElement("label")as HTMLLabelElement
      label.htmlFor = item.id
      label.textContent = item.item
      li.append(label)

      const button = document.createElement('button') as HTMLButtonElement
      button.className = 'button'
      button.textContent = 'Remove'
      li.append(button)

      button.addEventListener('click', ()=>{
         fullList.removeItems(item.id)
         this.render(fullList)
      })

      this.ul.append(li)
    });
  }
}
