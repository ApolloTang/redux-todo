import {connect} from 'react-redux';

import {mapStoreToProps, mapDispatchToProps} from './selector';

import TodoList from 'app/components/todoList';

export default connect(mapStoreToProps, mapDispatchToProps)(TodoList);
