// import "./styles.css";
// import { useState } from "react";
// interface ItemT {
//   id: number;
//   value: string;
//   done: boolean;
// }
// export default function App() {
//   const [newItem, setNewItem] = useState("");
//   const [items, setItems] = useState<ItemT[]>([]);
//   const [showInput, setShowInput] = useState(false);

//   function addItem() {
//     if (!newItem) {
//       alert("Empty title");
//       return;
//     }

//     const item: ItemT = {
//       id: Math.floor(Math.random() * 1000),
//       value: newItem,
//       done: false
//     };

//     setItems((oldList) => [...oldList, item]);
//     setNewItem("");
//   }

//   function deleteItem(id: number) {
//     const newArray = items.filter((item) => item.id !== id);
//     setItems(newArray);
//   }
//   function onDoneToggle(id: number) {
//     const inx = items.findIndex((item) => item.id === id);
//     const item = items[inx];
//     const newItem = { ...item, done: !item.done };
//     setItems([...items.slice(0, inx), newItem, ...items.slice(inx + 1)]);
//   }

//   return (
//     <div className="app">
//       <h1>My Todo List</h1>

//       <div>
//         {items.map((item) => {
//           return (
//             <div>
//               <label key={item.id}>
//                 <input
//                   value={item.id}
//                   onChange={() => onDoneToggle(item.id)}
//                   checked={item.done}
//                   type="checkbox"
//                 />
//                 {item.value}
//                 <button
//                   className="delete-button"
//                   onClick={() => deleteItem(item.id)}
//                 >
//                   X
//                 </button>
//               </label>
//             </div>
//           );
//         })}
//       </div>
//       {showInput && (
//         <div>
//           <input
//             type="text"
//             placeholder="Add an item..."
//             value={newItem}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               setNewItem(e.target.value)
//             }
//           />

//           <button onClick={() => addItem()}>Add</button>
//         </div>
//       )}
//       <button onClick={() => setShowInput((state) => !state)}>Add todo</button>
//     </div>
//   );
// }
