import { useBudgets } from "@/contexts/BudgetsContext";
import BudgetCard from "../budgetCard";

export default function TotalBudgetCard() {
    const { expenses, budgets } = useBudgets();
    const amount = expenses.reduce((total, expense) => total + expense.amount,0);
    const maxAmount = budgets.reduce((total, budget) => total + budget.max,0);
    if(maxAmount === 0) return null;
    return (
    <BudgetCard title="Total" amount={amount} maxAmount={maxAmount} hideButtons/>
    )
}
