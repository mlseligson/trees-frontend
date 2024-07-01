import axios from "axios"
import { useState } from "react"
import { useLoaderData, useNavigate } from "react-router-dom";

export async function treeTableLoader () {
  const apiUrl = 'http://127.0.0.1:3000/tree.json';

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (e) {
    return [];
  }
}

export function TreeTable() {

  let trees = useLoaderData();

  return (
    <>
      <table className="index">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Species</th>
            <th>Rings</th>
          </tr>
        </thead>
        <tbody>
          {
            trees.map(tree => <TreeRow tree={tree} />)
          }
        </tbody>
      </table>
    </>
  )
}

export function TreeRow({tree}) {
  const navigate = useNavigate();

  return (
    <>
      <tr key={tree.id} onClick={() => {
          navigate(`/tree/${tree.id}`)
        }}>
        <td>{tree.id}</td>
        <td>{tree.name}</td>
        <td>{tree.species}</td>
        <td>{tree.rings}</td>
      </tr>
    </>
  )
}

export function Tree(props) {
  return (
    <>
      
    </>
  )
}

export function AddTreeForm() {
  return (
    <>
      <form action="localhost:3000/tree" method="POST">
        <input type="text" name="name" placeholder="Tree Name" />
        <input type="text" name="species" placeholder="Tree Species" />
        <input type="number" name="rings" placeholder="Ring Count" />

        <button type="submit">Add Tree</button>
      </form>
    </>
  )
}