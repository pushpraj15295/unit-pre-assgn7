function AddItem({ setText, text, handleAdd, maxLength, length }) {
  return (
    <div>
      <input
        data-testid="input"
        placeholder="add something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        disabled={maxLength === length}
        onClick={handleAdd}
        data-testid="add-btn"
      >
        ADD
      </button>
    </div>
  );
}

export default AddItem;
