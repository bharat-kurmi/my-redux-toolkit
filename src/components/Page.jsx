import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { save, remove, searchLocation } from '../app/locationSlice'
import { changeTheme } from "../app/themeSlice";

const Page = () => {

  const { location, search } = useSelector(
    (state) => state.location
  );


  const { activeTheme  } = useSelector(
    (state) => state.theme
  );

  const dispatch = useDispatch();
  const handleChangeTheme = () => {
    dispatch(save('Indore'))
  };
  const handleDelete = () => {
    dispatch(remove('Bangalore'))
  }
  const handleSaveTheme = () => {
    dispatch(changeTheme('white'))
  }
  const handleSearch = (e) => {
    console.log('test', e.target.value)
    dispatch(searchLocation(e.target.value))
  }

  return (
    <div className="container" >
      <h1> {activeTheme} </h1>
      <button className="btn btn-primary" onClick={handleSaveTheme}>
        Change Theme
      </button>
      <div className="d-flex justify-content-between">
        <h3> Locations </h3>
        <button className="btn btn-primary" onClick={handleChangeTheme}>
          Add Location
        </button>
      </div>
      <br />
      Search Location : <input type="text" name="userLocation"  onChange={handleSearch}/>
      result: {search}
      <div>
        {location.map((item) => <div key={item}>{item}</div>
        )}
      </div>

      <button className="btn btn-primary" onClick={handleDelete}>
        Delete
      </button>

    </div>
  );
};

export default Page;