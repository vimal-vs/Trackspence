import { amountFormater } from "../../utils/amountFormater";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../../contexts/BudgetsContext"

export default function ViewExpensesModal({ budgetId, handleClose }) {

  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets();
  const budget = UNCATEGORIZED_BUDGET_ID === budgetId ? { name: "Uncategorized", id:UNCATEGORIZED_BUDGET_ID } :
    budgets.find(bud => bud.id === budgetId );
  const expenses = getBudgetExpenses(budgetId);
  return (
    <>
      { budgetId ? (
        <>
          <div className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto max-w-2xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="flex gap-6">
                    <h3 className="text-2xl font-semibold">
                    Expenses - { budget?.name }</h3>
                    {budgetId !== UNCATEGORIZED_BUDGET_ID && (
                        <button onClick={() => {
                            deleteBudget(budget)
                            handleClose()}}
                            className="border p-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white rounded-sm transition-all duration-150"
                            >Delete
                            </button>
                        )}
                  </div>
                    <button className="text-slate-300 text-2xl font-semibold outline-none focus:outline-none" onClick={handleClose}>&times;</button>
                </div>
                {/*body*/}
                  {expenses?.map(expense => (
                    <div className="flex justify-between p-2 border-b rounded-md py-4" key={expense.id}>
                      <span key={expense.id}>{expense.description}</span>
                      <span key={expense.id}>{amountFormater.format(expense.amount)}</span>
                      <button key={expense.id} onClick={() => deleteExpense(expense)} className="hover:text-red-400 hover:font-semibold">&times;</button>
                    </div>
                  ))}
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}