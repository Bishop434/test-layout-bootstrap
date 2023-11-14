import { Container } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import ModalAddNew from "./components/ModalAddNew";
import { useState } from "react";
function App() {
  const [isShowModalAddnew, setIsShowModalAddnew] = useState(false);

  const handleClose = () => {
    setIsShowModalAddnew(false);
  };
  return (
    <div className="app-container">
      <Header />
      <Container>
        <div className="my-3 add-new">
          <span>
            <b>List Users:</b>
          </span>
          <button
            className="btn btn-success"
            onClick={() => setIsShowModalAddnew(true)}
          >
            Create User
          </button>
        </div>
        <TableUsers />
      </Container>
      <ModalAddNew show={isShowModalAddnew} handleClose={handleClose} />
    </div>
  );
}

export default App;

// 2:26:24
