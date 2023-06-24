import { amountFormater } from "../../utils/amountFormater"
import { Progress } from "@/components/ui/progress";

const cardBg = (amount, maxAmount) => {
    if(amount>maxAmount){
        return "bg-red-300/20"
    }
    return ""
}

export default function BudgetCard({ title, amount, maxAmount, hideButtons, onAddExpenseClick, onViewExpensesClick }) {
  return (
    <div className={`flex flex-col gap-5 p-4 m-4 border rounded-sm ${cardBg(amount, maxAmount)}`}>
        <div className="flex justify-between">
            <div className="text-lg">{title}</div>
            <div>{amountFormater.format(amount)}{maxAmount && (<span className="text-slate-400">/{amountFormater.format(maxAmount)}</span>)}
            </div>
        </div>
        {maxAmount && (<Progress value={amount/maxAmount * 100} className="text-blue-200"/> )}
        {!hideButtons && (
        <div className="flex justify-end gap-4 py-2">
            <button className="border-blue-button text-blue-button border p-2 rounded-sm" onClick={onAddExpenseClick}>Add Expense</button>
            <button className="border rounded-sm p-2 text-slate-400" onClick={onViewExpensesClick}>View Expenses</button>
        </div>)}
    </div>

  )
}
