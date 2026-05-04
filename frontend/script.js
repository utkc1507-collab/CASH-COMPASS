const API_URL = "http://127.0.0.1:5001/api/expenses";

async function fetchExpenses() {
    try {
        let res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch expenses");
        let data = await res.json();

        let list = document.getElementById("list");
        let search = document.getElementById("search").value.toLowerCase();

        list.innerHTML = "";

        data
        .filter(e => e.category && e.category.toLowerCase().includes(search))
        .forEach(e => {
            let li = document.createElement("li");
            li.className = "expense-item";

            // Safe fallback for new fields that might not exist in old data
            let title = e.title || "Untitled Expense";
            let date = e.date || "No Date";
            let amountStr = parseFloat(e.amount).toFixed(2);

            li.innerHTML = `
                <div class="expense-info">
                    <span class="expense-title">${title}</span>
                    <span class="expense-meta">${e.category} | ${date}</span>
                </div>
                <div class="expense-actions">
                    <span class="expense-amount">$${amountStr}</span>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            let btn = li.querySelector(".delete-btn");
            btn.onclick = async () => {
                try {
                    await fetch(`${API_URL}/${e.id}`, {
                        method: "DELETE"
                    });
                    fetchExpenses();
                } catch (error) {
                    console.error("Error deleting expense:", error);
                }
            };

            list.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching expenses:", error);
    }
}

async function addExpense() {
    let title = document.getElementById("title").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;
    let notes = document.getElementById("notes").value;

    if (!title || !amount || !category || !date) {
        alert("Please fill all required fields");
        return;
    }

    try {
        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, amount, category, date, notes })
        });

        document.getElementById("title").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("category").value = "";
        document.getElementById("date").value = "";
        document.getElementById("notes").value = "";

        fetchExpenses();
    } catch (error) {
        console.error("Error adding expense:", error);
    }
}

// Ensure fetchExpenses is called when the DOM is loaded
document.addEventListener('DOMContentLoaded', fetchExpenses);
