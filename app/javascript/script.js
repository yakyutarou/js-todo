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
}