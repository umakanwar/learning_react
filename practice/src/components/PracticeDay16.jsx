import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const PracticeDay16 = () => {
    const [formdata, setFormdata] = useState({
        title: "",
        body: "",
      });
    
      const [response, setresponse] = useState(null);
    
      const HandleCahnge = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
      };
    
      const Handlesubmit = async (e) => {
        e.preventDefault();
        console.log(formdata);
        try {
          const res = await axios.post(
            "https://jsonplaceholder.typicode.com/posts",
            formdata
          );
          setresponse(res.data);
        } catch (error) {
          console.log("error");
        }
        setFormdata({
          title: "",
          body: "",
        });
      };
    
      return (
        <div className="text-center ">
          <h2 className="font-bold text-6xl">Post data to dummy API</h2>
          <form onSubmit={Handlesubmit}>
            <label> Title:</label>
            <input
              type="text"
              placeholder="Enter your Title"
              className="border-2 border-gray-300 p-2 m-2"
              onChange={HandleCahnge}
              value={formdata.title}
              name="title"
            />
            <br />
            <label> Body:</label>
            <input
              type="text"
              placeholder=" Body"
              className="border-2 border-gray-300 p-2 m-2"
              onChange={HandleCahnge}
              value={formdata.body}
              name="body"
            />
            <br />
            <button type="submit" className="bg-blue-500 px-4 py-2">
              Post
            </button>
          </form>
    
          {response && (
            <div>
              <h2 className="font-bold text-2xl">Response</h2>
              <p>{JSON.stringify(response, null, 2)}</p>
            </div>
          )}
        </div>
      );
}

export default PracticeDay16
