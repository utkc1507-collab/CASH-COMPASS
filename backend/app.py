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
