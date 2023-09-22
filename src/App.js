import { useState } from "react";
import BottomSheet from "./Components/BottomSheet";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handle_modal = (a) => {
    setIsModalOpen(a);
  };

  return (
    <div className="App">
      <BottomSheet handle_modal={handle_modal} />
    </div>
  );
}

export default App;
