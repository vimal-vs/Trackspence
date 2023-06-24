'use client';

import Navbar from "@/components/navBar";
import BudgetCard from "@/components/budgetCard";
import UncategorizedBudgetCard from "@/components/uncategorizedBudgetCard";
import { useBudgets } from "../contexts/BudgetsContext";
import { useState } from "react"
import AddBudgetModal from "@/components/addBudget";
import AddExpenseModal from "@/components/addExpense";
import TotalBudgetCard from "@/components/totalBudgetCard";

export default function Home() {

  const [showAddBudgetModel,setShowAddBudgetModel] = useState(false);
  const [showAddExpenseModel,setShowAddExpenseModel] = useState(false);
  const [addExpenseModalBudgetId,setAddExpenseModalBudgetId] = useState();

  const openAddExpenseModal= (budgetId) => {
    setShowAddExpenseModel(true);
    setAddExpenseModalBudgetId(budgetId);
  }

  const { budgets, getBudgetExpenses }  = useBudgets();

  return (
    <div>
        <Navbar />
        <div>
            <div className="flex justify-between p-3">
                <h1 className="text-3xl">Budgets</h1>
                <div className="flex gap-4">
                    <button className="bg-blue-button text-white p-2 rounded-sm" onClick={() => setShowAddBudgetModel(true)}>Add Budget</button>
                    <button className="border-blue-button text-blue-button border p-2 rounded-sm" onClick={openAddExpenseModal}>Add Expense</button>
                </div>
            </div>
            <AddBudgetModal show={showAddBudgetModel} handleClose={() => setShowAddBudgetModel(false)}/>
            <AddExpenseModal show={showAddExpenseModel} handleClose={() => setShowAddExpenseModel(false)} defaultBudgetId={addExpenseModalBudgetId} />
        </div>
        {budgets.map(budget => {
            const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount,0);
            return (
              <BudgetCard
                key={budget.id}
                title={budget.name}
                amount={amount}
                maxAmount={budget.max}
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
              />
            )
          })}
          <UncategorizedBudgetCard  onAddExpenseClick={openAddExpenseModal}/>
          <TotalBudgetCard />
    </div>
  )
}
