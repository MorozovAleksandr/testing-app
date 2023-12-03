const User = ({ user, onDelete }) => (
  <div className="user-item">
    {user.name}
    <button id="user-delete" onClick={() => onDelete(user.id)}>
      delete
    </button>
  </div>
);

export default User;
