from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

expenses = []

@app.route('/api/expenses', methods=['GET'])
def get_expenses():
    return jsonify(expenses)

@app.route('/api/expenses', methods=['POST'])
def add_expense():
    data = request.json
    expense = {
        "id": len(expenses) + 1,
        "amount": data.get("amount"),
        "category": data.get("category")
    }
    expenses.append(expense)
    return jsonify(expense)

if __name__ == '__main__':
    app.run(debug=True)

#DELETE API

@app.route('/api/expenses/<int:id>', methods=['DELETE'])
def delete_expense(id):
    global expenses
    expenses = [e for e in expenses if e["id"] != id]
    return {"message": "Deleted"}
