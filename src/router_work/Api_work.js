import React from 'react'
// import "./style.css";
import { useState , useEffect } from 'react'
export default function Api_work() {
    
    const [Table, setTable] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            return res.json();
        })
        .then((Table)=>{
            setTable(Table);
        });
    },[]);

  return (
    <div>
         <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>UserID</th>

                        
                    </tr>
                </thead>
                <tbody>
                             {Table.map((Fetch) =>(
                                <tr key={Fetch.id}>
                                <td>{Fetch.id}</td>
                                <td>{Fetch.title}</td>
                                <td>{Fetch.body}</td>
                                <td>{Fetch.userId}</td>
                            </tr>
                            ))}
                            </tbody>
            </table>
        </>
    </div>
  )
}
