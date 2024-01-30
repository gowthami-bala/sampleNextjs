import { FormEventHandler, useState } from "react";

interface ModelProps {
  modalOpen: boolean;
  children :React.ReactNode
}

const Model: React.FC<ModelProps> = ({ modalOpen,children }) => {
  
  return (
    <>
      {modalOpen && <div className="">
        {children}
     
      </div>}
    </>
  )
}

export default Model  