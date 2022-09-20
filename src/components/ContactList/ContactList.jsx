import PropTypes from 'prop-types';

import css from './ContactList.module.css';

const { item, wrapper, list } = css;

function ContactList({ items, removeContact }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <li className={item} key={id}>
        <div className={wrapper}>
          {name}: {number}{' '}
          <button type="button" onClick={() => removeContact(id)}>
            Delete
          </button>
        </div>
      </li>
    );
  });
  return (
    <div>
      <ul className={list}>{elements}</ul>
    </div>
  );
}

export default ContactList;

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
