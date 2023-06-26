import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../../contexts/BudgetsContext";
import BudgetCard from "../budgetCard";

export default function UncategorizedBudgetCard(props) {
    const { getBudgetExpenses } = useBudgets();
    const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID)?.reduce((total, expense) => total + expense.amount,0);
    if (amount === undefined) return;
    return (
        <div>
            {amount !== 0 && (<BudgetCard title="Uncategorized" amount={amount} {...props}/>)}
        </div>
    )
}
