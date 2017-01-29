import React from 'react'
import TodoListFilterSettingCtrl from 'app/containers/todo-list-filter-setting-ctrl'

const ControlSection = () => (
  <p>
    Show:
    {" "}
    <TodoListFilterSettingCtrl filterType="SHOW_ALL">
      All
    </TodoListFilterSettingCtrl>
    {", "}
    <TodoListFilterSettingCtrl filterType="SHOW_ACTIVE">
      Active
    </TodoListFilterSettingCtrl>
    {", "}
    <TodoListFilterSettingCtrl filterType="SHOW_COMPLETED">
      Completed
    </TodoListFilterSettingCtrl>
  </p>
)

export default ControlSection;
