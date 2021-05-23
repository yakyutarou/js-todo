const todoList = []
let inputForm,todoMain,tabButton,sortMenu
let displayTarget = "inbox"
let sortIndex = "created-desc"

/** Todo1個単位のHTML文字列を生成する */
function createTodoHtmlString(todo){
  let htmlString = ""
  const editType = todo.isEdit ? "editFixed" : "edit"
  const editButtonLabel = todo.isEdit ? "編集完了" : "編集"
  const doneType = todo.isDone ? "inbox" : "done"
  const doneButtonLabel = todo.isDone ? "未完了" : "完了"
  let todoTextCell,priorityCell
  if(todo.isEdit){
    todoTextCell =
      '<td class="cell-text"><input class="input-edit" type="text" value=' +
      todo.text +
      "/></td>"
    priorityCell =
      '<td class="cell-priority"><input class="input-priority" type="number" value=' +
      todo.priority +
      "/></td>"
  }else {
    todoTextCell = '<td class="cell-text">' + todo.text + "</td>"
    priorityCell = '<td class="cell-priority">' + todo.priority + "</td>"
  }
  
}