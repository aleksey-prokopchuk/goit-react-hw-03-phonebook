import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import css from './Filter.module.css';
const { wrapper, lable, input } = css;

function Filter({ value, onChange, title }) {
  const inputFilterId = nanoid();
  return (
    <div className={wrapper}>
      <label className={lable} htmlFor={inputFilterId}>
        {title}
      </label>
      <input
        className={input}
        id={inputFilterId}
        type="text"
        name="filter"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
