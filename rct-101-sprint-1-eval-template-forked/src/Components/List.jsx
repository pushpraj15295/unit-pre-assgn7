import { useState } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
const maxLength = 5;

function List() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleAdd = () => {
    const newlist = {
      title: text,
      status: false,
      id: Date.now() + text
    };
    setData([...data, newlist]);
    setText("");
  };
  // console.log(data)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      <AddItem
        text={text}
        setText={setText}
        handleAdd={handleAdd}
        maxLength={maxLength}
        length={data.length}
      />

      {data.map((e) => (
        <ListItem
          title={e.title}
          status={e.status}
          key={e.id}
          handleDelete={() => handleDelete(e.id)}
        />
      ))}
    </div>
  );
}

export default List;
