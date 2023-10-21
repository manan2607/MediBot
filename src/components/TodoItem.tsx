type TodoItemProps={
    id: string
    title: string
    complete: Boolean
}
export function TodoItem({id,title,complete}:TodoItemProps){
    return <li className=" flex gap-1 item-center">
        <input id={id} type="checkbox"  className="cursor-pointer peer"/>
        <label htmlFor={id} className=" cursor-pointer peer-checked:line-through peer-checked:text-slate-500" ></label>
    </li>

}