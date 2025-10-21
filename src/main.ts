import './css/style.css'
import FullList from './model/FullLists'
import DomClassList from './templates/ListTemplate'
import ListItems  from './model/ListItems'


const initApp = (): void => {
const fullList = FullList.instance
const ListTemplate = DomClassList.instance

const inputEntryForm = document.getElementById('itemEntryForm') as HTMLFormElement
inputEntryForm.addEventListener('submit', (event: SubmitEvent): void => {
    event.preventDefault()

    const input = document.getElementById("newItem") as HTMLInputElement
    const newEntryText :string = input.value.trim()
    if (!newEntryText) return

    const itemId: number = fullList.list.length
    ? parseInt(fullList.list[fullList.list.length - 1].id) + 1 
    : 1

    const newItem = new ListItems(itemId.toString(), newEntryText)

    fullList.addItems(newItem)
    ListTemplate.render(fullList)
})

const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement
clearItems.addEventListener("click", ():void =>{
    fullList.clearList()
   ListTemplate.clear()

})

fullList.load()
ListTemplate.render(fullList)
}

document.addEventListener('DOMContentLoaded', initApp)