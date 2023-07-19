import css from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    const valueFilter = event.currentTarget.value.trim();
    dispatch(setFilter(valueFilter));
  };

  return (
    <div className={css.filterWrapper}>
        <input className={css.inputFilter}
          type="text"
          placeholder="Find contacts"
          value={filter}
          onChange={handleChange}
        />
    </div>
  );
};

export default Filter;
