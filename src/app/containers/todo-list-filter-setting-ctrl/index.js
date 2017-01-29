import {connect} from 'react-redux';

import {mapStoreToProps, mapDispatchToProps} from './selector';

import Link  from 'app/widgets/link';

export default connect(mapStoreToProps, mapDispatchToProps)(Link);
