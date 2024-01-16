import React, { useContext } from "react"
import { InfoContext } from "../../App"

function DeleteEmplyment() {

  const { deleteEmpl} = useContext(InfoContext)

  return (
  <>
  {null !== deleteEmpl && <div className="delete-modal modal">
    Hello world!!!!

    </div>}
  </>
  )
}

export default DeleteEmplyment
