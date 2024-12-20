import "./ExpenseCategory.css";

function ExpenseCategory(){
    return(
        <>
        <div className="ExpenseCategoryBox">
            <h1>Categories</h1>
            <div className="expenseBoxes">
                <div className="expenseBox">
                    <h5>Clothing</h5>
                </div>

                <div className="expenseBox">
                    <h5>Grocery</h5>
                </div>

                <div className="expenseBox">
                    <h5>Transportation</h5>
                </div>
            </div>
        </div>
        </>
    )
}

export default ExpenseCategory;