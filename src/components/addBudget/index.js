import { useRef, useState } from "react"
import { useBudgets } from "../../contexts/BudgetsContext"

export default function AddBudgetModal({ show, handleClose }) {
  
  const nameRef = useRef()
  const maxRef = useRef()
  const { addBudget } = useBudgets()

  function handleSubmit(e) {
    e.preventDefault()
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    })
    handleClose()
  }
  return (
    <>
      { show === true ? (
        <>
          <div className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto max-w-2xl">
              {/*content*/}
              <form onSubmit={handleSubmit} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    New Budget
                  </h3>
                  <button className="text-slate-300 text-2xl font-semibold outline-none focus:outline-none" onClick={handleClose}>×</button>
                </div>
                {/*body*/}
                <div className="flex flex-col p-4 gap-8">
                  <div className="relative flex flex-col">
                    <label htmlFor="nameInput">Name</label>
                    <input name="nameInput" ref={nameRef} type="text" className="border p-1" required/>
                  </div>
                  <div className="relative flex flex-col">
                    <label htmlFor="nameInput">Maximum Spending</label>
                    <input name="nameInput" ref={maxRef} type="number" className="border p-1" required/>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-3 mt-4 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="border-2 font-semibold border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}