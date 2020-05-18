import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux.js';

/*
export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
*/

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

/* funkcja dodaje propsy komponentu – jednak ich wartościami nie są dane ze stanu, ale funkcje wysyłające akcje do magazynu. W tym wypadku props addColumn będzie zawierał funkcję, przyjmującą jeden argument – title. Na podstawie tego argumentu zostanie wykonana funkcja dispatch (która jest argumentem funkcji mapDispatchToProps), wysyłająca akcję do magazynu.
*/
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);