import { useRef, useState } from "react"
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "../../contexts/BudgetsContext"

export default function AddExpenseModal({ show, handleClose, defaultBudgetId }) {
  const descriptionRef = useRef()
  const amountRef = useRef()
  const budgetIdRef = useRef()
  const { addExpense, budgets } = useBudgets();

  function handleSubmit(e) {
    e.preventDefault()
    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value
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
                    New Expense
                  </h3>
                  <button className="text-slate-300 text-2xl font-semibold outline-none focus:outline-none" onClick={handleClose}>×</button>
                </div>
                {/*body*/}
                <div className="flex flex-col p-4 gap-4">
                  <div className="relative flex flex-col">
                    <label htmlFor="DescriptionInput" className="text-black">Description</label>
                    <input name="DescriptionInput" ref={descriptionRef} type="text" className="border p-1" required/>
                  </div>
                  <div className="relative flex flex-col">
                    <label htmlFor="AmountInput" className="text-black">Amount</label>
                    <input name="AmountInput" ref={amountRef} type="number" className="border p-1" required/>
                  </div>
                </div>
                <label htmlFor="countries">Select an option</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                defaultValue={defaultBudgetId} ref={budgetIdRef}>
                  <option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
                  {budgets.map(budget => (
                    <option key={budget.id} value={budget.id}>
                      {budget.name}
                    </option>
                  ))}
                </select>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-blue-button text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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