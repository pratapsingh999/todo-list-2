import React, { useState } from "react";
import logo from "../component/todo.png";
import logo1 from "../component/todo1.png";
import logo2 from "../component/todo2.png";
import logo3 from "../component/todo3.png";

function Todoapp() {
  const [Data, setData] = useState("");
  const [Saveitems, setSaveitems] = useState([]);
  const storedata = () => {
    if (!Data) {
    } else {
      setSaveitems([...Saveitems, Data]);
      setData("");
    }
  };

  const [todo, settodo] = useState([setSaveitems]);
  const [doing, setdoing] = useState([setSaveitems]);
  const [done, setdone] = useState([Saveitems]);

    // move to doing

  const MoveToDoing = (id) => {
            const todolist = todo.filter((elem, ind) => {
                console.log(id)
              return ind !== id;
            });
            settodo(todolist);
    
            setdoing([...doing, todo[id]]);
        }
      
          // move to done
  const MoveToDone = (statusOfItems, id) => {
   
        const doingitems = doing.filter((elem, ind) => {
          return ind !== id;
        });
        setdoing(doingitems)
        setdone([...done, doing[id]]);  
    }

    // delete 
  const DeleteItem = (id) => {
        const updateditems = Saveitems.filter((elem, ind) => {
          return ind !== id;
        });
        setSaveitems(updateditems);
      };

    //   clear all
      const removeAll = () => {
        setSaveitems([]);
      };
 
      
  return (
    <>
      {/* text */}
      <div className="main-div">
        <div className="chil-div">
          <figure>
            <img className="img" src={logo} alt="todologo" />
            <figcaption>
              <h1 className="texts">Add your list hear </h1>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* button */}

      <div class="col-auto add">
        <input
          type="text"
          placeholder="Add items........"
          value={Data} //empty data
          onChange={(e) => setData(e.target.value)} // it is for writing anything
        />
        <button
          type="submit1"
          class="btn btn-primary mb-3 mx-3"
          title=" Add Itemes "
          onClick={storedata}
        >
          Add itemes
        </button>

        <button
          type="submit2"
          class="btn btn-primary mb-3 mx-3 "
          title=" Clear Item "
          onClick={removeAll}
        >
          Clear itemes
        </button>
        <button type="submit2" class="btn btn-primary mb-3" onClick={storedata}>
          <i className="fa fa-plus" title="Add Item"></i>
        </button>
      </div>

      {/* cards */}

      <div class="card-group">
        <div class="card">
          <img src={logo1} class="card-img-top img" alt="todo-list" />
          <div class="card-body">
            <h5 class="card-title">Todo-list</h5>
            {
                Saveitems.map((elem, ind) => {
              return (
                <p class="card-text">
                  <ul>
                    <li>
                      <h3>{elem}<button
                        className="btn btn-primary  mx-3"
                        title="move items"
                        onClick={() => MoveToDoing("doing", ind)}
                      >
                        <span>MOVE</span>
                      </button>   <i
                        className="fa fa-trash-o delete"
                        title="Delete Item"
                        onClick={() => DeleteItem(ind)}
                      ></i></h3> 
                    </li>
                  </ul>
                </p>
              );
            })
            }
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img src={logo2} class="card-img-top img" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Todo-list in Process</h5>
            {/* {
                Saveitems.map((elem, ind) => {
              return (
                <p class="card-text" key={ind}>
                  <ul>
                    <li>
                      <h3><button
                        className="btn btn-primary  mx-3"
                        title="move items"
                        onClick={() => MoveToDone("done", ind)}
                      >
                        <span>MOVE</span>
                      </button>   <i
                        className="fa fa-trash-o delete"
                        title="Delete Item"
                        onClick={() => DeleteItem(ind)}
                      ></i></h3> 
                    </li>
                  </ul>
                </p>
              );
            })
            } */}
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img src={logo3} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Todo-list is Done</h5>
            <p class="card-text"></p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todoapp;
